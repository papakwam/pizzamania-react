import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="container about-pizza">
                <div className="row">
                    <h2 className="text-center">ABOUT PIZZA</h2>
                    <div className="col-md-6">
                        <div className="pizza-image">
                            <img src="image/pizza6.jpg" alt="about pizza" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Delicious Pizza Delights</h4>
                        <p>
                            Pizza is a beloved Italian dish, famous for its delicious combination of flavors and textures.
                            It typically consists of a round, flat base of leavened wheat-based dough topped with a rich tomato sauce, melted cheese, and a variety of tasty ingredients.
                        </p>
                        <p>
                            Whether you prefer classic Margherita, savory pepperoni, or gourmet toppings like truffle oil and arugula, there's a pizza for every palate.
                            Pizza is often baked to perfection in wood-fired ovens, giving it a unique and irresistible taste.
                        </p>
                        <p>
                            Explore the world of pizza and discover the endless possibilities of this culinary masterpiece.
                            Join us on a journey to savor the flavors of Italy and beyond with every delicious slice.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
