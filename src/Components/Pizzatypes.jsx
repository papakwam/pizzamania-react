import React from "react";
import Item from "./Item";

class Pizzatypes extends React.Component {
    render() {
        return (
            <div className="container pizza-types">
                <div className="row">
                    <h3 className="text-center">Pizza Types</h3>

                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="image/pizza8.jpg" alt="Cheezy Pizza" />
                            <div className="caption">
                                <h3>Cheezy</h3>
                                <p>
                                    Deliciously cheesy pizza with a blend of mozzarella and cheddar, topped with your favorite toppings. Perfect for cheese lovers!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="image/pizza6.jpg" alt="Hungry man Pizza" />
                            <div className="caption">
                                <h3>Hungry Man</h3>
                                <p>
                                    A hearty pizza loaded with savory meats and vegetables, satisfying even the hungriest appetites.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="image/pizza3.jpg" alt="Meat AllOver Pizza" />
                            <div className="caption">
                                <h3>Meat AllOver</h3>
                                <p>
                                    Meat lovers rejoice! This pizza is piled high with a variety of meats, including pepperoni, sausage, and bacon.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="thumbnail">
                            <img src="image/pizza4.jpg" alt="WBHBYD Pizza" />
                            <div className="caption">
                                <h3>WBHBYD</h3>
                                <p>
                                    An acronym for "What's Better Than Homemade? You Decide!" Create your custom pizza masterpiece with your favorite ingredients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pizzatypes;
