import USER from '../../actions/userAction';


  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    users:"",
    userloading:true,
    isDeleted:0,
  };

 
  
  const userReducer = (state = initialState, action) => {

    switch (action.type) {
      
        /**로그인 */
      case USER.USER_LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case USER.USER_LOGIN_SUCCESS:
        localStorage.setItem("token",action.payload);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          userloading: false,
        };

      case USER.USER_LOGIN_FAILURE:
        return {
          ...state,
          ...action.payload,
          token: null,
          isAuthenticated: false,
          userloading: false,
        };

        /**로그아웃 */
       case USER.USER_LOGOUT_REQUEST:
          return {
            ...state,
            userloading: true,
          };
        case USER.USER_LOGOUT_SUCCESS:
          localStorage.removeItem("token");
          return {
            ...state,
            ...action.payload,
            isAuthenticated: false,
            userloading: false,
          };
        case USER.USER_LOGOUT_FAILURE:
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            userloading: false,
          };
  
          /**로딩 */
       case USER.USER_LOADING_REQUEST:
        return {
          ...state,
          userloading: true,
        };
      case USER.USER_LOADING_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          userloading: false,
        };
      case USER.USER_LOADING_FAILURE:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };

        
        /**사용자 수정 */
       case USER.USER_EDIT_REQUEST:
        return {
          ...state,
          userloading: true,
        };
      case USER.USER_EDIT_SUCCESS:
        return {
          ...state,
          userloading: false,
        };
      case USER.USER_EDIT_FAILURE:
        return {
          ...state,
          userloading: false,
        };

        /**사용자 삭제 */
       case USER.USER_DELETE_REQUEST:
        return {
          ...state,
          userloading: true,
        };
      case USER.USER_DELETE_SUCCESS:
        return {
          ...state,
          userloading: false,
          isAuthenticated: true,
        };
      case USER.USER_DELETE_FAILURE:
        return {
          ...state,
          userloading: false,
          isAuthenticated: false,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;