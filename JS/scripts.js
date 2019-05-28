$(document).ready(() => {
  'use strict';

  let year1;
  let year2;
  let year3;
  let make1;
  let make2;
  let make3;
  let model1;
  let model2;
  let model3;
  let carTrims1;
  let carTrims2;
  let carTrims3;
  let aCode;

  startUp();
  yearEventListeners();
  makeEventListeners();
  modelEventListeners();
  trimEventListeners();

  function startUp() {
    // Ajax function that gets car years in database and populates select fields
    $.ajax({
      type: 'post',
      url: 'PHP/getCarYears.php',
      dataType: 'json',
      beforeSend: () => {
        // Makes all select element unclickable while loading
        $('select').html('<option disabled selected value>Loading...</option>');
        $('select').prop('disabled', true);
      },
      success: results => {
        // Makes all select elements clickable after loading
        $('select').html('<option disabled selected value></option>');
        $('select').prop('disabled', false);

        $.each(results, (idx, obj) => {
          // Displays all years from database
          $('#year1').append('<option>' + obj.year + '</option>');
          $('#year2').append('<option>' + obj.year + '</option>');
          $('#year3').append('<option>' + obj.year + '</option>');
        });
      }
    });
  }

  function yearEventListeners() {
    $('#year1').change(() => {
      year1 = $('#year1').val();

      $.ajax({
        type: 'post',
        url: 'PHP/getCarMakes.php',
        data: {
          year: year1
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#make1').html('<option disabled selected value>Loading...</option>');
          $('#model1').html('<option disabled selected value>Loading...</option>');
          $('#trim1').html('<option disabled selected value>Loading...</option>');
          $('#make1').prop('disabled', true);
          $('#model1').prop('disabled', true);
          $('#trim1').prop('disabled', true);
        },
        success: results => {
          // Makes select elements clickable after loading
          $('#make1').html('<option disabled selected value></option>');
          $('#model1').html('<option disabled selected value></option>');
          $('#trim1').html('<option disabled selected value></option>');
          $('#make1').prop('disabled', false);
          $('#model1').prop('disabled', false);
          $('#trim1').prop('disabled', false);

          $.each(results, (idx, obj) => {
            // Displays all makes from database that match the year selected
            $('#make1').append('<option>' + obj.make + '</option>');
          });
        }
      });
    });

    $('#year2').change(() => {
      year2 = $('#year2').val();
      $.ajax({
        type: 'post',
        url: 'PHP/getCarMakes.php',
        data: {
          year: year2
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#make2').html('<option disabled selected value>Loading...</option>');
          $('#model2').html('<option disabled selected value>Loading...</option>');
          $('#trim2').html('<option disabled selected value>Loading...</option>');
          $('#make2').prop('disabled', true);
          $('#model2').prop('disabled', true);
          $('#trim2').prop('disabled', true);
        },
        success: results => {
          // Makes select elements clickable after loading
          $('#make2').html('<option disabled selected value></option>');
          $('#model2').html('<option disabled selected value></option>');
          $('#trim2').html('<option disabled selected value></option>');
          $('#make2').prop('disabled', false);
          $('#model2').prop('disabled', false);
          $('#trim2').prop('disabled', false);

          $.each(results, (idx, obj) => {
            // Displays all makes from database that match the year selected
            $('#make2').append('<option>' + obj.make + '</option>');
          });
        }
      });
    });

    $('#year3').change(() => {
      year3 = $('#year3').val();

      $.ajax({
        type: 'post',
        url: 'PHP/getCarMakes.php',
        data: {
          year: year3
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#make3').html('<option disabled selected value>Loading...</option>');
          $('#model3').html('<option disabled selected value>Loading...</option>');
          $('#trim3').html('<option disabled selected value>Loading...</option>');
          $('#make3').prop('disabled', true);
          $('#model3').prop('disabled', true);
          $('#trim3').prop('disabled', true);
        },
        success: results => {
          // Makes select elements clickable after loading
          $('#make3').html('<option disabled selected value></option>');
          $('#model3').html('<option disabled selected value></option>');
          $('#trim3').html('<option disabled selected value></option>');
          $('#make3').prop('disabled', false);
          $('#model3').prop('disabled', false);
          $('#trim3').prop('disabled', false);

          $.each(results, (idx, obj) => {
            // Displays all makes from database that match the year selected
            $('#make3').append('<option>' + obj.make + '</option>');
          });
        }
      });
    });
  }

  function makeEventListeners() {
    $('#make1').change(() => {
      make1 = $('#make1').val();

      $.ajax({
        type: 'post',
        url: 'PHP/getCarModels.php',
        data: {
          year: year1,
          make: make1
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#model1').html('<option disabled selected value>Loading...</option>');
          $('#trim1').html('<option disabled selected value>Loading...</option>');
          $('#model1').prop('disabled', true);
          $('#trim1').prop('disabled', true);
        },
        success: results => {
          // Makes select elements clickable after loading
          $('#model1').html('<option disabled selected value></option>');
          $('#trim1').html('<option disabled selected value></option>');
          $('#model1').prop('disabled', false);
          $('#trim1').prop('disabled', false);

          $.each(results, (idx, obj) => {
            // Displays all models from database that match the year and make selected
            $('#model1').append('<option>' + obj.model + '</option>');
          });
        }
      });
    });

    $('#make2').change(() => {
      make2 = $('#make2').val();

      $.ajax({
        type: 'post',
        url: 'PHP/getCarModels.php',
        data: {
          year: year2,
          make: make2
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#model2').html('<option disabled selected value>Loading...</option>');
          $('#trim2').html('<option disabled selected value>Loading...</option>');
          $('#model2').prop('disabled', true);
          $('#trim2').prop('disabled', true);
        },
        success: results => {
          // Makes select elements clickable after loading
          $('#model2').html('<option disabled selected value></option>');
          $('#trim2').html('<option disabled selected value></option>');
          $('#model2').prop('disabled', false);
          $('#trim2').prop('disabled', false);

          $.each(results, (idx, obj) => {
            // Displays all models from database that match the year and make selected
            $('#model2').append('<option>' + obj.model + '</option>');
          });
        }
      });
    });

    $('#make3').change(() => {
      make3 = $('#make3').val();

      $.ajax({
        type: 'post',
        url: 'PHP/getCarModels.php',
        data: {
          year: year3,
          make: make3
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#model3').html('<option disabled selected value>Loading...</option>');
          $('#trim3').html('<option disabled selected value>Loading...</option>');
          $('#model3').prop('disabled', true);
          $('#trim3').prop('disabled', true);
        },
        success: results => {
          // Makes select elements clickable after loading
          $('#model3').html('<option disabled selected value></option>');
          $('#trim3').html('<option disabled selected value></option>');
          $('#model3').prop('disabled', false);
          $('#trim3').prop('disabled', false);

          $.each(results, (idx, obj) => {
            // Displays all models from database that match the year and make selected
            $('#model3').append('<option>' + obj.model + '</option>');
          });
        }
      });
    });
  }

  function modelEventListeners() {
    $('#model1').change(() => {
      make1 = $('#make1')
        .val()
        .toLowerCase();
      make1 = make1.replace(/ |-/g, '_');
      model1 = $('#model1')
        .val()
        .toLowerCase();
      model1 = model1.replace(/ |-/g, '_');

      $.ajax({
        type: 'post',
        url: 'PHP/getCarTrims.php',
        data: {
          make: make1,
          model: model1,
          year: year1
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#trim1').html('<option disabled selected value>Loading...</option>');
          $('#trim1').prop('disabled', true);
        },
        success: carInfo => {
          // Makes select elements clickable after loading
          $('#trim1').html('<option disabled selected value></option>');
          $('#trim1').prop('disabled', false);

          carTrims1 = carInfo;

          $.each(carInfo.vehicle.trims, (idx, obj) => {
            // Displays all trims from database that match the year, make, and model selected
            $('#trim1').append('<option>' + obj.trimDesc + ' ' + obj.trimExtendedDesc + '</option>');
          });
        },
        statusCode: {
          500: () => {
            alert('Please contact the administrator at clubin2015@fau.edu');
          }
        }
      });
    });

    $('#model2').change(() => {
      make2 = $('#make2')
        .val()
        .toLowerCase();
      make2 = make2.replace(/ |-/g, '_');
      model2 = $('#model2')
        .val()
        .toLowerCase();
      model2 = model2.replace(/ |-/g, '_');

      $.ajax({
        type: 'post',
        url: 'PHP/getCarTrims.php',
        data: {
          make: make2,
          model: model2,
          year: year2
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#trim2').html('<option disabled selected value>Loading...</option>');
          $('#trim2').prop('disabled', true);
        },
        success: carInfo => {
          // Makes select elements clickable after loading
          $('#trim2').html('<option disabled selected value></option>');
          $('#trim2').prop('disabled', false);

          carTrims2 = carInfo;

          $.each(carInfo.vehicle.trims, (idx, obj) => {
            // Displays all trims from database that match the year, make, and model selected
            $('#trim2').append('<option>' + obj.trimDesc + ' ' + obj.trimExtendedDesc + '</option>');
          });
        },
        statusCode: {
          500: () => {
            alert('Please contact the administrator at clubin2015@fau.edu');
          }
        }
      });
    });

    $('#model3').change(() => {
      make3 = $('#make3')
        .val()
        .toLowerCase();
      make3 = make3.replace(/ |-/g, '_');
      model3 = $('#model3')
        .val()
        .toLowerCase();
      model3 = model3.replace(/ |-/g, '_');

      $.ajax({
        type: 'post',
        url: 'PHP/getCarTrims.php',
        data: {
          make: make3,
          model: model3,
          year: year3
        },
        dataType: 'json',
        beforeSend: () => {
          // Makes select element unclickable while loading
          $('#trim3').html('<option disabled selected value>Loading...</option>');
          $('#trim3').prop('disabled', true);
        },
        success: carInfo => {
          // Makes select elements clickable after loading
          $('#trim3').html('<option disabled selected value></option>');
          $('#trim3').prop('disabled', false);

          carTrims3 = carInfo;

          $.each(carInfo.vehicle.trims, (idx, obj) => {
            // Displays all trims from database that match the year, make, and model selected
            $('#trim3').append('<option>' + obj.trimDesc + ' ' + obj.trimExtendedDesc + '</option>');
          });
        },
        statusCode: {
          500: () => {
            alert('Please contact the administrator at clubin2015@fau.edu');
          }
        }
      });
    });
  }

  function trimEventListeners() {
    $('#trim1').change(() => {
      let trim1 = $('#trim1').val();

      $.each(carTrims1.vehicle.trims, (idx, obj) => {
        if (trim1.indexOf(obj.trimDesc) != -1 && trim1.indexOf(obj.trimExtendedDesc) != -1) {
          aCode = obj.acode;
        }
      });

      $.ajax({
        type: 'post',
        url: 'PHP/getCarDetails.php',
        data: {
          aCode: aCode
        },
        dataType: 'json',
        success: carInfo => {
          updateFields(carInfo, 1);
        },
        statusCode: {
          500: () => {
            alert('Please contact the administrator at clubin2015@fau.edu');
          }
        }
      });
    });

    $('#trim2').change(() => {
      let trim2 = $('#trim2').val();

      $.each(carTrims2.vehicle.trims, (idx, obj) => {
        if (trim2.indexOf(obj.trimDesc) != -1 && trim2.indexOf(obj.trimExtendedDesc) != -1) {
          aCode = obj.acode;
        }
      });

      $.ajax({
        type: 'post',
        url: 'PHP/getCarDetails.php',
        data: {
          aCode: aCode
        },
        dataType: 'json',
        success: carInfo => {
          updateFields(carInfo, 2);
        },
        statusCode: {
          500: () => {
            alert('Please contact the administrator at clubin2015@fau.edu');
          }
        }
      });
    });

    $('#trim3').change(() => {
      let trim3 = $('#trim3').val();

      $.each(carTrims3.vehicle.trims, (idx, obj) => {
        if (trim3.indexOf(obj.trimDesc) != -1 && trim3.indexOf(obj.trimExtendedDesc) != -1) {
          aCode = obj.acode;
        }
      });

      $.ajax({
        type: 'post',
        url: 'PHP/getCarDetails.php',
        data: {
          aCode: aCode
        },
        dataType: 'json',
        success: carInfo => {
          updateFields(carInfo, 3);
        },
        statusCode: {
          500: () => {
            alert('Please contact the administrator at clubin2015@fau.edu');
          }
        }
      });
    });
  }

  function updateFields(carInfo, columnNum) {
    const msrp = JSON.stringify(carInfo.vehicle.pricing.msrp);
    const listPrice = JSON.stringify(carInfo.vehicle.pricing.listPrice);
    const invoicePrice = JSON.stringify(carInfo.vehicle.pricing.invoicePrice);
    const destinationCharge = JSON.stringify(carInfo.vehicle.pricing.destinationCharge);

    $('#tempMargin').removeClass("mt-3");
    $('#img' + columnNum).css("display", "block");
    $('#img' + columnNum).attr("src", carInfo.vehicle.mmyt.imageUrl);
    // Puts comma in correct position depending on value length
    if (msrp.length == 7) {
      $('.msrp' + columnNum).html('$' + msrp.substr(0, 1) + ',' + msrp.substr(1, 3) + ',' + msrp.substr(5, 3));
    } else if (msrp.length == 6) {
      $('.msrp' + columnNum).html('$' + msrp.substr(0, 3) + ',' + msrp.substr(3, 3));
    } else if (msrp.length == 5) {
      $('.msrp' + columnNum).html('$' + msrp.substr(0, 2) + ',' + msrp.substr(2, 3));
    } else if (msrp.length == 4) {
      $('.msrp' + columnNum).html('$' + msrp.substr(0, 1) + ',' + msrp.substr(1, 3));
    }
    $('.mpgCombined' + columnNum).html(carInfo.vehicle.overview.mpgCombined);
    for (let [i, engine] of carInfo.vehicle.overview.engines.entries()) {
      if (i == 0) {
        $('#engine' + columnNum).html(engine);
      } else {
        $('#engine' + columnNum).append(`, <br> ${engine}`);
      }
    }
    $('#torque' + columnNum).html(carInfo.vehicle.specifications.torque[0]);
    for (let [i, tranny] of carInfo.vehicle.overview.transmissions.entries()) {
      if (i == 0) {
        $('#tramission' + columnNum).html(tranny);
      } else {
        $('#tramission' + columnNum).append(`, <br> ${tranny}`);
      }
    }
    $('#seats' + columnNum).html(carInfo.vehicle.overview.seats);
    $('#drivetrain' + columnNum).html(carInfo.vehicle.overview.drivetrain);
    $('#weight' + columnNum).html(carInfo.vehicle.specifications.curbWeight[0]);
    $('#tankCapacity' + columnNum).html(carInfo.vehicle.specifications.fuelTankCapacity[0]);
    $('#proximityKey' + columnNum).html(carInfo.vehicle.convenience.proximityKey[0]);
    $('#cruiseC' + columnNum).html(carInfo.vehicle.convenience.cruiseControl[0]);
    $('#aCruiseC' + columnNum).html(carInfo.vehicle.convenience.adaptiveCruiseControl[0]);
    $('#compass' + columnNum).html(carInfo.vehicle.convenience.compass[0]);
    $('#vanityMirrors' + columnNum).html(carInfo.vehicle.convenience.illuminatedVanityMirrors[0]);
    $('#steeringWheelMaterial' + columnNum).html(carInfo.vehicle.convenience.steeringWheelMaterial[0]);
    $('#steeringColumn' + columnNum).html(carInfo.vehicle.convenience.tiltingSteeringColumn[0]);
    $('#clock' + columnNum).html(carInfo.vehicle.convenience.clock[0]);
    $('#cupHolders' + columnNum).html(carInfo.vehicle.convenience.cupholders[0]);
    $('#garageOpener' + columnNum).html(carInfo.vehicle.convenience.garageDoorOpener[0]);
    $('#rearDefogger' + columnNum).html(carInfo.vehicle.convenience.rearWindowDefogger[0]);
    $('#mpgh' + columnNum).html(carInfo.vehicle.fuelEconomy.highway);
    $('#mpgc' + columnNum).html(carInfo.vehicle.fuelEconomy.city);
    // Puts comma in correct position depending on value length
    if (listPrice.length == 7) {
      $('#listPrice' + columnNum).html('$' + listPrice.substr(0, 1) + ',' + listPrice.substr(1, 3) + ',' + listPrice.substr(5, 3));
    } else if (listPrice.length == 6) {
      $('#listPrice' + columnNum).html('$' + listPrice.substr(0, 3) + ',' + listPrice.substr(3, 3));
    } else if (listPrice.length == 5) {
      $('#listPrice' + columnNum).html('$' + listPrice.substr(0, 2) + ',' + listPrice.substr(2, 3));
    } else if (listPrice.length == 4) {
      $('#listPrice' + columnNum).html('$' + listPrice.substr(0, 1) + ',' + listPrice.substr(1, 3));
    }
    // Puts comma in correct position depending on value length
    if (invoicePrice.length == 7) {
      $('#invoicePrice' + columnNum).html('$' + invoicePrice.substr(0, 1) + ',' + invoicePrice.substr(1, 3) + ',' + invoicePrice.substr(5, 3));
    } else if (invoicePrice.length == 6) {
      $('#invoicePrice' + columnNum).html('$' + invoicePrice.substr(0, 3) + ',' + invoicePrice.substr(3, 3));
    } else if (invoicePrice.length == 5) {
      $('#invoicePrice' + columnNum).html('$' + invoicePrice.substr(0, 2) + ',' + invoicePrice.substr(2, 3));
    } else if (invoicePrice.length == 4) {
      $('#invoicePrice' + columnNum).html('$' + invoicePrice.substr(0, 1) + ',' + invoicePrice.substr(1, 3));
    }
    // Puts comma in correct position depending on value length
    if (destinationCharge.length == 5) {
      $('#destinationCharge' + columnNum).html('$' + destinationCharge.substr(0, 2) + ',' + destinationCharge.substr(2, 3));
    } else if (destinationCharge.length == 4) {
      $('#destinationCharge' + columnNum).html('$' + destinationCharge.substr(0, 1) + ',' + destinationCharge.substr(1, 3));
    } else {
      $('#destinationCharge' + columnNum).html('$' + destinationCharge);
    }
  }
});
