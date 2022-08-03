export interface IStateThunk<IState = any> {
  data: IState | IState[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
