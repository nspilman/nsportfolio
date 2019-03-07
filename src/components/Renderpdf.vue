<template>
<div>
    <pdf src ="https://natespilman.tech/media/pdfs/Nate_Spilman_Resume_PbZVy2A.pdf"/>
<a href = "https://www.pdfhost.net/index.php?Action=DownloadFile&id=05b81684e05cbef7e4978755283cb436"> uhhhh </a>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
import axios from "axios"
export default {
    components:{
        pdf
    },
    data(){
        return{
            resumeUrl:null,
        }
        
    },
    created(){
        axios.get('https://natespilman.tech/jobhunt/resume').then(resp => this.resumeUrl = resp)
        setTimeout(console.log(this.resumeUrl),0)
    }
}
</script>
