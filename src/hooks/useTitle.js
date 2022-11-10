import {useEffect} from "react"
const useTitle = title =>{
    useEffect(() => {
      document.title = `${title}-web3 services`;
    }, [title])
    
}

export default useTitle;