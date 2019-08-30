const initialState = {
  feedback :
			[ 
			{
			name: 'Chris Martin',
			email: 'chris@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			},
			{
			name: 'Jonas Peter',
			email: 'jonas@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			},
			{
			name: 'Emi Stephen',
			email: 'emi@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			},
			{
			name: 'Jack Paul',
			email: 'jack@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			}
			],
			email:"",
            name:"",
			feed:"",
			editting:false,
    }
    
    
function rootReducer(state = initialState, action) {
  return state;
};
export default rootReducer;