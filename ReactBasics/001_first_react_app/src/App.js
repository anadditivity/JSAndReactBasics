import {useState} from 'react';

export default function MyApp() {
    // let's add some buttons that share a property (count)
    const [count2, setCount] = useState(0);
    function handleButtonClick() {
        setCount(count2 + 1);
    }
    return (<div>
        <h1>Welcome to my app</h1>
        <MyButton/>
        <AboutPage/>
        <Profile/>
        <ShoppingList/>
        <ButtonWithStates/><br />
        <ButtonWithStates/>
        <p>The buttons below should share a state.</p><br />
        <ButtonWithSharedState count2={count2} onClick={handleButtonClick}/><br />
        <ButtonWithSharedState count2={count2} onClick={handleButtonClick}/>
    </div>);
}

function AboutPage() {
    return (<>
        <h1>About</h1>
        <img className="avatar" width="200px" src="https://preview.redd.it/a-deep-dive-into-why-i-love-kims-portrait-and-kim-in-general-v0-cti46gsiqn2b1.jpg?width=368&format=pjpg&auto=webp&s=8c6b4cd0894800df5b9dbee4b032cffd6139e8f5"/> {/*Specifying CSS class*/}
        <p>Hi!<br/>How are you?</p>
        <p>Oh, this actually works. Sweet!</p>
    </>)
}

const user = {
    name: 'A person: FirstName LastName', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', imageSize: 90
}

// only 1 default function is allowed per JS file!
export function Profile() {
    return (<>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={`Photo of ${user.name}`}
            style={{
                width: user.imageSize, height: user.imageSize
            }}
        /> {/* {{}} means regular JS object inside style={} JSX curly brackets */}
        <p>This is not actually me.</p>
    </>);
}

// I've not created isLoggedIn, AdminPanel nor Loginform yet.
// Still, a blueprint on conditional JSX return values.
export function displayAdminPanel() {
    return (<div>
            {isLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)}
        </div>)
}

// You could use a for-loop to display list objects (every object needs separate li tags)
// however, a map() is much cleaner
const products = [{title: 'Cabbage', isFruit: false, id: 1}, {title: 'Garlic', isFruit: false, id: 2}, {
    title: 'Apple',
    isFruit: true,
    id: 3
},];

export function ShoppingList() {
    const listItems = products.map(product => <li key={product.id}
                                                  style={{
                                                      color: product.isFruit ? 'red' : 'green'
                                                  }}
    >
        {product.title}
    </li>);
    return (<ul>{listItems}</ul>);
}

// Responding to events - event handlers!
function MyButton() {
    function handleClick() {
        alert("Oh no! You've clicked the button!");
    }

    // NO PARENTHESIS! no function call, just passing it down.
    return (<button onClick={handleClick}>
            Do not click the button!
        </button>)
}

// requires useState import
function ButtonWithStates() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    };
    return (
        <button onClick={handleClick}>
            You can click this one :) Clicked {count} times.
        </button>
    );
}

function ButtonWithSharedState({ count2, onClick}) {
    return (
        <button onClick={onClick}>
            These two should share a state. Clicked {count2} times.
        </button>
    );
}