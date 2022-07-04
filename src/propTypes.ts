import PropTypes from 'prop-types'

export default {
    onClick:PropTypes.func.isRequired ,
    btnStyle:PropTypes.object as any,
    loader:PropTypes.oneOfType([PropTypes.string, PropTypes.node]) as any,
    label:PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired as any,
    btnClass:PropTypes.string as any,
    forceDisable: PropTypes.bool as any,
    icon:PropTypes.node as any,
    children:PropTypes.node as any,
    confirm:PropTypes.shape({ message: PropTypes.string, ok: PropTypes.string, cancel:PropTypes.string }) as any
  
  }


  

