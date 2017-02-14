export interface Chart {
  title: {
    text: String;
  };
  series: Array<number>;
  xAxis: {
    categories: Array<string>;
  };
  yAxis: {
    title: {
      text: string;
    };
  };
};
