

export const configEnv = (env)=>{
    return process.loadEnvFile(`./.${env}`)
}