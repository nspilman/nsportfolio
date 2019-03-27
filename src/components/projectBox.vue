<template>
    <div class = 'col-md-4'>
        <div class="card medium mb-4">
            <div class = 'mainContent'>
                <div class ='backgroundImage' v-show="!showDeets" @mouseover="showHideDetails">
              <img :src="project.photo" class = "img-fluid p-4">
                </div>
                <div v-show="showDeets" class ='detailModal pt-4' @mouseleave='showHideDetails'>
                    <!-- <div class = 'text-right mx-4'>
                        <span class ='closeModal' @click='showHideDetails'>x</span>
                    </div> -->
                    <span class="card-title brown-text">Build<i class="mdi-navigation-close right"></i></span>
                    <hr>
                    <ul class='container'>
                        <li v-for="accomplishment in project.accomplishments" :key="accomplishment">{{ accomplishment }} <hr></li>
                  </ul>
                  <ul class="icons">
                      <li v-if="project.github!=''">
                        <a :href="project.github" target = "_blank" class="icon fa-github">
                            <span class="label">GitHub</span>
                        </a>
                    </li>
                    <li v-if="project.website !=''">
                        <a :href="project.website"  target = "_blank" class="icon fa-laptop">
                            <span class="label">Email</span>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="card-image waves-effect waves-block waves-light" @click='showHideDetails'>
                <img alt="Screenshot of BlogSpire web app" src="https://source.unsplash.com/400x350" class="activator">
            </div> -->
            <div class="card-content"><span class="card-title text-left activator teal-text hoverline">{{project.name}}<i class="mdi-navigation-more-vert right"></i></span>
                <p>{{project.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:
        function(){
            return{
                showDeets:false
            }
        },
    methods:{
        showHideDetails(){
            this.showDeets = !this.showDeets;
        }
    },
    props:['project'],
    created(){
    }
}
</script>


<style scoped>
ul{
    list-style:none;
}

.card-title{
    font-size: 2em;
}
.detailModal, .backgroundImage{
    width:100%;
    height:350px;
    position: absolute;
 }

.detailModal{
    background-color: rgba(255,255,255,0.65);
}
.mainContent{
    height:350px;
    width:100%;

}

.closeModal{
    font-size:3em;
}

.closeModal:hover{
cursor:pointer;
}

</style>

