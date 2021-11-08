export interface ExampleStateInterface {
  prop: boolean;
  loanAmount: number;
  total: number;
  rateOptions: SelectInterface[];
  selectedItem: SelectInterface;
  interest: number;
  perRepay: number;
  repayTimes: number;
  isValid: boolean;
}
export interface SelectedItemInterface {
  months: number;
  rate: number;
}

export interface SelectInterface {
  label: string;
  value: SelectValueInterface ;
  description: string;
  category: number;
}

export interface SelectValueInterface {
  months: number;
  rate: number;
}

function state(): ExampleStateInterface {
  return {
    prop: false,
    loanAmount: 12,
    total: 500,
    rateOptions: [],
    selectedItem: {
      label: '',
      value: {
        months: 3,
        rate: 3
      },
      description: '',
      category: 1
    },
    interest: 0,
    perRepay: 0,
    repayTimes: 0,
    isValid: false
  }
};

export default state;
