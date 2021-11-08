/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = ({ setcurrentComp }) => {

    return (
        <nav>
            <a onClick={() => { setcurrentComp('calculator') }} href="#">Calculator</a>
            <a onClick={() => { setcurrentComp('timer') }} href="#">Timer</a>
            <a onClick={() => { setcurrentComp('tap') }} href="#">Tap</a>
        </nav>
    );
}

export default Navbar;