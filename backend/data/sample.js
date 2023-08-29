const response = async () => {
    const response = await fetch("http://localhost:1000/traffic_structure");
    const data = await response.json();
    return data.lt1b;
  };
  
  const calculateBill = async (meterUnit) => {
    response().then(async (data) => {
      for (var index = 0; index < data.length; index++) {
        const { range, fixed_charge, energy_charge, wheeling_charge } =
          data[index];
        if (range.end === "Infinity") {
          console.log(
            `For meter reading ${meterUnit} the data will be FC=${fixed_charge} EC=${energy_charge} & WC=${wheeling_charge} `
          );
        } else {
          if (meterUnit >= range.start && meterUnit <= range.end) {
            console.log(
              `For meter reading ${meterUnit} the data will be FC=${fixed_charge} EC=${energy_charge} & WC=${wheeling_charge} `
            );
            break;
          } else {
            console.log("Not found");
          }
        }
      }
    });
  };
  
  calculateBill(30);
  
  