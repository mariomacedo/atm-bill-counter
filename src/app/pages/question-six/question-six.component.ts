import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  first,
  floor,
  get,
  includes,
  map,
  slice,
  toNumber,
  orderBy,
} from 'lodash';
import { AmountAndBills } from '../../shared/models/amount-bills.model';
import { errorInput } from '../../shared/errors/input-error.error';
import { AtmBillError } from 'src/app/shared/models/error.model';
import { ResultLine } from 'src/app/shared/models/result-line.model';

const delimiter = ' ';

@Component({
  selector: 'app-question-six',
  templateUrl: './question-six.component.html',
  styleUrls: ['./question-six.component.scss'],
})
export class QuestionSixComponent {
  errorMessage = '';
  result: ResultLine[] = [];

  form: FormGroup = this.fb.group({
    params: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  main(): void {
    this.errorMessage = '';
    const amountAndBills = this.parseAmountAndBills(
      this.form.value.params.split(delimiter)
    );

    if (!get(amountAndBills, 'error')) {
      this.result = this.getBills(
        get(amountAndBills, 'amount', 0),
        get(amountAndBills, 'bills', [])
      );
    } else {
      this.errorMessage = get(amountAndBills, 'message');
    }
  }

  parseAmountAndBills = (input: string[]): AmountAndBills | AtmBillError => {
    const splitted = map(input, (value) => toNumber(value));

    return !includes(splitted, NaN) && splitted.length > 1
      ? {
          amount: first(splitted) || 0,
          bills: orderBy(slice(splitted, 1), undefined, ['desc']),
        }
      : errorInput;
  };

  getBills(finalAmount: number, bills: number[]): ResultLine[] {
    const lines: ResultLine[] = [];
    let currentAmount = finalAmount;

    for (let bill of bills) {
      if (currentAmount % bill >= 0) {
        const quant = floor(currentAmount / bill);
        lines.push({ quant, value: bill });
        currentAmount = currentAmount - quant * bill;
      }
    }

    if (currentAmount > 0) {
      return [];
    }

    return lines;
  }
}
