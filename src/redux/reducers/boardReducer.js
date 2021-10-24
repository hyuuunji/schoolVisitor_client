import BOARD from '../../actions/postAction';

  
    const initialState = {
      boards: [],
      boardDetails: "",
      detailloading:false,
      deleteloading:false,
      editloading:false,
      boardloading:true,
    };
    

  
    const boardReducer = (state = initialState, action) => {
        switch (action.type) {


     /**업로딩 */
      case BOARD.BOARD_UPLOADING_REQUEST:
        return {
          ...state,
          boardloading: true,
        };
      case BOARD.BOARD_UPLOADING_SUCCESS:
        return {
          ...state,
          boardloading: false,
        };
      case BOARD.BOARD_UPLOADING_FAILURE:
        return {
          ...state,
          boardloading: false,
        }

    /**Loading */
    case BOARD.BOARD_LOADING_REQUEST:
            
        return {
          ...state,
          boardloading: true,
        };
      case BOARD.BOARD_LOADING_SUCCESS:
    
      return {
          ...state,
          boards: [...action.payload.data.content],
          boardloading: false,
            }
      
      case BOARD.BOARD_LOADING_FAILURE:
        return {
          ...state,
          boardloading: false,
        }

       /**Detail */  
       case BOARD.BOARD_DETAIL_LOADING_REQUEST:
        return {
          ...state,
          boards: [],
          detailloading: true,
        };
      case BOARD.BOARD_DETAIL_LOADING_SUCCESS:
        return {
          ...state,
          detailloading: false,
          boardDetails:action.payload.data,
        };

      case BOARD.BOARD_DETAIL_LOADING_FAILURE:
        return {
          ...state,
          detailloading:false,
        }


     /**수정 */
      case BOARD.BOARD_EDIT_REQUEST:
        return {
          ...state,
          editloading: true,
        };
      case BOARD.BOARD_EDIT_SUCCESS:
        return {
          ...state,
          editloading: false,
        };
      case BOARD.BOARD_EDIT_FAILURE:
        return {
          ...state,
          editloading: false,
        }

    /**삭제 */
      case BOARD.BOARD_DELETE_REQUEST:
        return {
          ...state,
          deleteloading: true,
        };
      case BOARD.BOARD_DELETE_SUCCESS:
        return {
          ...state,
          deleteloading: false,
        };
      case BOARD.BOARD_DELETE_FAILURE:
        return {
          ...state,
          deleteloading: false,
        }

  

            
        default:
          return state;
        }
     
    };
    export default boardReducer;
   