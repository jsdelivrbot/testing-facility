import { connect } from 'react-redux';
import { submitForm } from '../actions/index';
import WelcomeForm from './welcomeForm';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: data => {
            dispatch(submitForm(data));
        }
    }
}

let WelcomeContainer = connect(null, mapDispatchToProps)(WelcomeForm)

export default WelcomeContainer;