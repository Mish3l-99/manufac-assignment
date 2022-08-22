import React from "react";
import ReactEcharts from "echarts-for-react";

// filed names containing spaces must have their interface property in bracket notations
interface Data {
  data: {
    Alcohol: number;
    "Malic Acid": number;
    Ash: number;
    "Alcalinity of ash": number;
    Magnesium: number;
    "Total phenols": number;
    Flavanoids: number;
    "Nonflavanoid phenols": number;
    Proanthocyanins: string;
    "Color intensity": number;
    Hue: number;
    "OD280/OD315 of diluted wines": number;
    Unknown: number;
  }[];
}

const Charts = (props: Data) => {
  const { data } = props;
  const t = data[0];

  // ########### BAR CHART #################

  // get the three categories in seperate arrays
  const cat1 = data.filter((p) => p.Alcohol === 1);
  const cat2 = data.filter((p) => p.Alcohol === 2);
  const cat3 = data.filter((p) => p.Alcohol === 3);

  // to calculate the average of Malic Acid for each of the three categories
  let sum1: number = 0,
    sum2: number = 0,
    sum3: number = 0;

  // average category 1
  cat1.forEach((p) => {
    sum1 += p["Malic Acid"];
  });
  let avg1 = sum1 / cat1.length;

  // average category 2
  cat2.forEach((p) => {
    sum2 += p["Malic Acid"];
  });
  let avg2 = sum2 / cat2.length;

  // average category 3
  cat3.forEach((p) => {
    sum3 += p["Malic Acid"];
  });
  let avg3 = sum3 / cat3.length;

  const optionsBar = {
    xAxis: {
      type: "category",
      data: ["Category 1", "Category 2", "Category 3"],
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Average of Malic Acid",
    },
    series: [
      {
        data: [avg1, avg2, avg3],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  // ########### SCATTER CHART #################

  // get the Color Intensity and Hue in an array of arrasy
  const scatterData: number[][] = [];
  data.forEach((p) => {
    scatterData.push([p["Color intensity"], p["Hue"]]);
  });

  const optionScatter = {
    xAxis: {
      name: "Color Intensity",
    },
    yAxis: {
      name: "Hue",
    },
    series: [
      {
        symbolSize: 20,
        data: scatterData,
        type: "scatter",
      },
    ],
  };

  return (
    <div className="container">
      {/* bar */}
      <h3>Bar Chart :</h3>
      <ReactEcharts option={optionsBar} />

      {/* scatter */}
      <h3>Sctter Chart :</h3>
      <ReactEcharts option={optionScatter} />
    </div>
  );
};

export default Charts;
