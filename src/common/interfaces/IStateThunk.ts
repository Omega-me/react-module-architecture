export interface IStateThunk<I> {
  data: I | I[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
