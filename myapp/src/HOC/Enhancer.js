import Description from "../components/Description";

const Enhancer = (Component) => {

    return ({ admin }) => admin ? <Component /> : "Private"

}

export default Enhancer;