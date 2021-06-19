/* 
https://github.com/dashboardphilippines/react-webcam-barcode-scanner#readme

React component built in Typescript to provide a webcam-based barcode scanner using react-webcam and @zxing/library. This component works on Computers and Mobile Devices (iOS 11 and above and Android Phones)

*/

import React, { useContext, useState, useEffect } from 'react';

import BarcodeScannerComponent from 'react-webcam-barcode-scanner';

// context
import { AppContext } from './../../context/appContext';

const GetPoints = () => {
  const { user } = useContext(AppContext);
  const [barCode, setBarCode] = useState(false);
  const [barCodeNumber, setBarCodeNumber] = useState(false);
  console.log('baaarCOdeNumber', barCodeNumber);

  const getBarCodeNumber = (number) => {
    setBarCodeNumber(number);
  };

  useEffect(() => {
    if (barCode) {
      getBarCodeNumber(barCode);
    }
  }, [barCode]);

  return (
    <div className="main-content">
      <div className="section-1-scan">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="title-general-home">Scan a product</div>
              <div className="text-general-home">
                Instructiuni de utilizare: abcdef gabcdefgabc defga bcdefgabcde
                fgabcdefgabcdefgabcdefgabcdefg
              </div>
              <div>
                <p>Barcode: {barCodeNumber}</p>
              </div>
              <br />
              <br />
              <br />
              <div className="box-add-to-scan">
                <div className="title-product">Product: Sticla cola</div>

                <div className="row">
                  <div className="col-md-4 col-xs-4">
                    Points:
                    <br /> <span className="points-number">20</span>
                  </div>
                  <div className="col-md-8 col-xs-8">
                    <button
                      type="button"
                      name="buttonaddproduct"
                      className="buttonaddproduct"
                    >
                      Add points
                    </button>
                    <span className="hidden disclaimer-points-added">
                      Points added!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="scan-area">
                <BarcodeScannerComponent
                  width={450}
                  height={400}
                  onUpdate={(err, result) => {
                    if (result) {
                      setBarCode(result.text);
                    } else {
                      setBarCode(false);
                    }
                  }}
                />
              </div>
              <div className="disclaimer-points">
                Your total points: {user.totalPoints}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPoints;
