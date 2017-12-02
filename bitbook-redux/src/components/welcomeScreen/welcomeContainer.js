import { connect } from 'react-redux';
import { submitForm } from '../../actions/index';
import WelcomeForm from './welcomeForm';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => {
            dispatch(submitForm(data));
        }
    }
}

const mapStateToProps = state => {
    return {
        confirmation: state.form
    }
}

let WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomeForm)

export default WelcomeContainer;