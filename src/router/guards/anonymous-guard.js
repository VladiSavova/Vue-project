export default (to, from, next) => {
    const token = localStorage.getItem('user-token')
   console.log(token);
   
    if (!token) {
       next()
        
    }else{
        next('/')
    }

};