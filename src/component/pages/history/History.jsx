import React from 'react';
import "./history.scss"
const History = () => {

    return (
        <>
            <div className="size_container">
                <div className="content-history">
                    <div className="history-title">
                        <h3>History</h3>
                        <hr/>
                    </div>
                    <div className="history-card">
                        <div className="card-history-sum">
                           <div >
                               <p>poker-profi</p>
                               <p>time</p>
                           </div>
                            <h5>+250 USDT</h5>
                        </div>
                        <div className="card-history-sum">
                           <div>
                               <p>blot-klasicheski</p>
                               <p>time</p>
                           </div>
                            <h5>-20 USDT</h5>
                        </div>
                        <div className="card-history-sum">
                           <div>
                               <p>turnir-eejendeltni</p>
                               <p>time</p>
                           </div>
                            <h5>+1200 USDT</h5>
                        </div>
                        <div className="card-history-sum">
                           <div>
                               <p>poker-sredni</p>
                               <p>time</p>
                           </div>
                            <h5>-50 USDT</h5>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default History;