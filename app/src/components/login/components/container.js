import { connect } from 'react-redux'

import component from './component'
import { loginRequest } from '../actions'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    userLogin: () => dispatch(loginRequest())
})

export default connect(mapStateToProps,mapDispatchToProps)(component)

