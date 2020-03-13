const { exec } = require('../db/index')

const userMapping = require('../mapping/userMapping')

const login = (data) => {
    const sql = userMapping.loginCheck
    return exec(sql,[data.username,data.password]).then(result => {

        let data = {status:'Y',message:''}
        if(result.err){
            data.status  = 'N'
            data.message  = result.err
            return data 
        }

        if(result.length && result.length > 0){
            var test = JSON.parse(JSON.stringify(result))
            if(test[0].statu !== 0){
                data.status  = 'N'
                data.message = "用户数据状态不正确"
            }
        }else{
            data.status  = 'N'
            data.message = "用户名或密码不正确"
        }
        return data
    })
}




const addUser = (data ) => {
    const sql = userMapping.insert
    return exec(sql,[data.username,data.password]).then((result) => {
        let data = {status:'Y',message:''}
        if(result.err){
            data.status  = 'N'
            data.message  = result.err
        }
        return data
       
    })
  
}

const userList = () => {
    const sql = userMapping.queryAll
    return exec(sql).then(result => {
    
        let data = {status:'Y',message:'',list:result}
        if(result.err){
            data.status  = 'N'
            data.message  = result.err
        }
        return data
         
    })
}


const queryById = (id) => {
    const sql = userMapping.queryById
    return exec(sql,id).then((result) => {
        let data = {status:'Y',message:'',list:result}
        if(result.err){
            data.status  = 'N'
            data.message  = result.err
        }   
        return data ;     
    })
}


const deleteUser = (id) => {

    
    const sql = userMapping.delete
    return exec(sql,id).then((result) => {
        let data = {status:'Y',message:'',list:result}
        console.log(result.affectedRows)
        if(result.err){
            data.status  = 'N'
            data.message  = result.err
        }                   
        return data ;     
    })
}



const updateUserStatu = (id) => {

    const sql = userMapping.updateUserStatu
    return exec(sql,id).then((result) => {
        let data ={}
        
        if(result.affectedRows > 0){
            data =  {
                code:'0',
                message:'操作成功',
            }
        }else{
            data =  {
                code:'0',
                message:'无效操作',
            }
        }
        return data ;     
    })
}


module.exports = {
    login,
    userList,
    queryById,
    deleteUser,
    addUser,
    updateUserStatu
}
