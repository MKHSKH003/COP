import { connect } from 'react-redux'

import component from './component'
import { loginRequest } from '../../actions'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    userLogin: () => dispatch(loginRequest()),
    userSignup: (name, email, password) => console.log('user-sign', name, email, password)
})

export default connect(mapStateToProps,mapDispatchToProps)(component)

