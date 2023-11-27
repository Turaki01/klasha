export interface LineChartDataInterface extends Record<string, unknown> {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
