<template>
    <div class="main-container font-mono max-w-screen-2xl flex flex-wrap relative m-auto w-full pt-12">
        <div class="top-container">
            <div class="top-right w-full max-w-[400px] flex gap-x-1 flex-wrap">
                <div class="carrera py-1 px-1 flex border-solid border border-[#252d32] items-center justify-between rounded-tl-[5px] rounded-br-[5px]">
                    <span class="carrera-title text-white text-[14px] uppercase">carrera</span>
                    <span class="carrera-codigo text-white text-[20px] font-semibold text-center font-manrope">{{ codCarrera }}</span>
                </div>
                
                <div class="countdown w-6/12 border-solid border border-[#486865] backdrop-blur-sm rounded-tl-[5px] rounded-br-[5px] bg-[#486865] min-w-[96px] flex items-center justify-center flex-col gap-1 ">
                    <span class="py-1 px-1 w-full countdown font-mono text-[20px] countdown-element days font-manrope font-semibold text-white text-center">{{ timeLeft }}</span>
                </div>
                <div class="cuenta-regresiva mt-1 w-full">
                    <p class="text-white w-max bg-[#c2c2c283] text-[14px] text-left font-manrope text-sm uppercase tracking-[.25em] py-[3px] px-[5px]">
                        cuenta regresiva
                    </p>

                    <p class="text-white flex justify-between w-[201px] text-[14px] mt-1 font-manrope bg-[#d23460] text-sm uppercase tracking-[.25em] py-[3px] px-[5px]">
                        <span>jackpot</span>
                        <span class="text-[17px] font-semibold">{{ jackpot }}</span>
                    </p>
    
                </div>
            </div>
        </div>
        <div class="content-boxes hide flex justify-between">
            <div class="left">
                <div class="box">
                    <div class="box-header">
                        <h2 class="box-title">Historial</h2>
                    </div>
                    <div class="box-content">
                        <ul class="box-list">
                            <li class="h-list" v-for="box in boxList" :key="box.code">
                                <span class="box-code">
                                    {{ box.code }}
                                </span>
                                <span class="box-number">
                                    <span class="box-n box-number1" :class="'bg-c' + box.number1">
                                        {{ box.number1 }}
                                    </span>
                                    <span class="box-n box-number2" :class="'bg-c' + box.number2">
                                        {{ box.number2 }}
                                    </span>
                                    <span class="box-n box-number2" :class="'bg-c' + box.number3">
                                        {{ box.number3 }}
                                    </span>
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="rigth w-9/12">
                <div class="relative pt-[11px] pl-[22px] m-auto">
                    <div class="segundo absolute rounded-t-md right-0 top-0 font-manrope text-center text-sm uppercase tracking-[.25em] pt-[3px] pb-[1px] px-[35px]" >
                        <span class="text-black">{{segundo}}</span>
                    </div>
                    <div class="content border overflow-hidden mt-3 rounded-tl-[70px] rounded-br-[70px] text-gray-700 uppercase bg-gray-50 dark:text-white">
                        <div class="row-1 w-full flex border-b-2">
                            <div class="fist-icon w-1/9 max-w-1/9 h-20 flex justify-center items-center">
                                <IconsSnipper
                                    :class="icon" 
                                    width="w-16" 
                                    heigth="h-16"  
                                    color="fill-white"
                                    svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
                                />
                            </div>
                
                            <MainTitle
                                CustomClass="title w-1/9 max-w-1/9 h-20 flex justify-center items-center text-[27px] text-white"
                                :range="MainTitleRange"
                                :colors="colors"
                                />
                        </div>

                        <RowValue 
                            :value="RowValue"
                            :index="1"
                            :rowScore="RowScore"
                            :colors="colors"
                            />
                    </div>
                    <div class="primero absolute rotate-[-90deg] rounded-t-md left-[-67px] bottom-[64px] font-manrope text-center text-sm uppercase tracking-[.25em] py-[3px] px-[35px]" >
                        <span class="text-black">{{primero}}</span>
                    </div>
                </div>
            </div>
        </div>

        <PlaceResult 
            :firstPlace="firstPlace"
            :secondPlace="secondPlace"
            :thirtPlace="thirtPlace"
        />
    
        <ModalSnipper
            :isModalOpen="isModalOpen"
            ref="modalSnipperRef"
        />

        <ModalSnipperRace
            :isModalOpen="isModalOpen"
            ref="modalSnipperRaceRef"
        />

        <PromoBanner 
            :showBanner="showBanner"
            :title="bannerText"
            :buttonText="buttonText"
        />
    </div>
</template>

<script>
import IconsSnipper from './IconsSnipper.vue'
import MainTitle from './MainTitle.vue'
import RowValue from './RowValue.vue'
import ModalSnipper from './ModalSnipper.vue'
import ModalSnipperRace from './ModalSnipperRace.vue'
import PromoBanner from './PromoBanner.vue'
import { ref, computed } from 'vue'
import PlaceResult from './PlaceResult.vue'

export default {
    name: 'TableBoard',
    components: {
        IconsSnipper,
        MainTitle,
        RowValue,
        ModalSnipper,
        ModalSnipperRace,
        PromoBanner,
        PlaceResult
    },
    setup() {
        let countdownFrom = 0;
        let timeLeft = ref(countdownFrom);
        const isModalOpen = ref(true);
        const modalSnipperRef = ref(null);
        const modalSnipperRaceRef = ref(null);
        const RowScore = ref([]);
        let codCarrera = ref('000000');
        let jackpot = ref('00.00');
        let tiempoRestante = ref();
        let bannerText = ref('');
        let firstPlace = ref({dog: 1, money: 0});
        let secondPlace = ref({dog: 2, money: 0});
        let thirtPlace = ref({dog: 3, money: 0});
        let boxList = ref([]);
        let videoUrl = ref('');
        const endpoit = "https://hipicous.lottomovilrd.com/videos";

        function startCountdown() {
            let placeRun = false;
            let isShow = false
            let initRace = false;

            const countdownInterval = setInterval(() => {
                if (timeLeft.value > 0) timeLeft.value--

                if ((timeLeft.value === 0 || timeLeft.value > 294) && !initRace) {
                    // console.log(timeLeft.value, !initRace)
                    initRace = true;
                    isShow = false;
                    placeRun = false;

                    getRaceData();
                    document.querySelector('.content-boxes').classList.add('hide');

                    if (bannerText.value) {
                        document.querySelector('.banner-content').classList.add('hide');
                    }

                    setTimeout(() => { 
                        // console.log('timeLeft', timeLeft.value)
                        if (timeLeft.value === 0 ){
                            timeLeft.value = 296;
                            countdownInterval;
                        }

                        if (modalSnipperRaceRef.value) modalSnipperRaceRef.value.setSrc(videoUrl.value);
                        if (modalSnipperRef.value) modalSnipperRef.value.resetVideo();
                    }, 4000);
                }

                if (timeLeft.value > 0 && timeLeft.value < 264) {
                    initRace = false;
                    if (!isShow && timeLeft.value >= 240) {
                        if (modalSnipperRaceRef.value) modalSnipperRaceRef.value.stopVideo();
                        isShow = true;
                        if (!placeRun) {
                            placeResult();
                            placeRun = true;
                        }

                        if (modalSnipperRef.value) {
                            modalSnipperRef.value.playVideo();
                        }

                        setTimeout(() => {
                            // to the element .content-boxes add the class open
                            document.querySelector('.content-boxes').classList.remove('hide');
                            if (bannerText.value) {
                                document.querySelector('.banner-content').classList.remove('hide');
                            }

                        }, 21000);
                    }

                    if (!isShow) {
                        isShow = true;
                        // aqui se llama a la funcion para mostrar el modal video de fondo
                        if (modalSnipperRef.value) {
                            modalSnipperRef.value.playVideo();
                        }

                        // aqui llama la funcion para detener el video de carrera
                        if (modalSnipperRaceRef.value) modalSnipperRaceRef.value.stopVideo();

                        document.querySelector('.content-boxes').classList.remove('hide');
                        if (bannerText.value) {
                            document.querySelector('.banner-content').classList.remove('hide');
                        }
                    }
                }
            }, 1000);
        }

        function placeResult() {
            getData();
            const firstPlace = document.querySelector('.place-result__firt-place');
            const secondPlace = document.querySelector('.place-result__second-place');
            const thirdPlace = document.querySelector('.place-result__third-place');
            
            setTimeout(() => {
                firstPlace.classList.remove('hide');
            }, 2000);
            setTimeout(() => {
                secondPlace.classList.remove('hide');
            }, 4000);
            setTimeout(() => {
                thirdPlace.classList.remove('hide');
            }, 6000);

            setTimeout(() => {
                firstPlace.classList.add('hide');
                secondPlace.classList.add('hide');
                thirdPlace.classList.add('hide');

                if (modalSnipperRef.value) {
                    modalSnipperRef.value.playVideo();
                }
            }, 16000);
        }

        async function getData(firstLoad = false) {
            RowScore.value = [];
            //fetch to get the data to this endpoint https://hipicous.lottomovilrd.com:8040/servicios post method

            const data = await fetch('https://hipicous.lottomovilrd.com:8040/servicios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Trama": "42;1$3"
                })
            })
            .then(response => response.json())

            // allow two values before the point 
            RowScore.value = data.Data.split(';')[1].split('$').map(value => parseFloat(value).toFixed(2)); 
            if(firstLoad) getRaceData()
        }

        async function getRaceData() {
            //fetch to get the data to this endpoint https://hipicous.lottomovilrd.com:8040/servicios post method
            const data = await fetch('https://hipicous.lottomovilrd.com:8040/servicios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Trama": "29;3"
                })
            })
            .then(response => response.json())

            const ticketGanador = data.Data.split(';')[1].split('$')[5].split('@');
            const  videoName = data.Data.split(';')[1].split('$')[3];

            codCarrera.value = data.Data.split(';')[1].split('$')[0];
            jackpot.value = data.Data.split(';')[1].split('$').map(value => parseFloat(value).toFixed(2))[4];
            tiempoRestante.value = Math.abs(data.Data.split(';')[1].split('$')[2]);

            if (ticketGanador.legth) {
                bannerText.value = `El ticket ganador es ${ticketGanador[0]} con un monto de ${parseFloat(ticketGanador[2]).toFixed(2)} en el establecimiento ${ticketGanador[1]}`;
            } else {
                bannerText.value = '¿Tu perro tiene lo que se necesita para ser el campeón?';
            }
            
            videoUrl.value = `${endpoit}/${videoName}`;
 
            const lastValue = {
                code: data.Data.split(';')[1].split('$')[0],
                number1: data.Data.split(';')[1].split('$')[1].split('-')[0],
                number2: data.Data.split(';')[1].split('$')[1].split('-')[1],
                number3: data.Data.split(';')[1].split('$')[1].split('-')[2],
            }

            if (boxList.value.length === 0) {
                const history =  getRecord(data.Data.split(';')[1].split('$'));
                boxList.value = history;
            }

            // check if the boxList has 8 elements if it has remove the last element
            if (boxList.value.length === 8) boxList.value.pop();

            // check if the code of the test is not in the boxList
            if (!boxList.value.find(box => box.code === lastValue.code)) boxList.value.unshift(lastValue);

            firstPlace.value = {
                dog: parseInt(data.Data.split(';')[1].split('$')[1].split('-')[0]),
                money: data.Data.split(';')[1].split('$').map(value => parseFloat(value).toFixed(2))[6]
            }

            secondPlace.value = {
                dog: parseInt(data.Data.split(';')[1].split('$')[1].split('-')[1]),
                money: data.Data.split(';')[1].split('$').map(value => parseFloat(value).toFixed(2))[7]
            }

            thirtPlace.value = {
                dog: parseInt(data.Data.split(';')[1].split('$')[1].split('-')[2]),
                money: data.Data.split(';')[1].split('$').map(value => parseFloat(value).toFixed(2))[8]
            }

            if (tiempoRestante.value) {
                timeLeft.value = tiempoRestante.value;
            }
        }

        function getRecord (data) {
            const result = [];

            for (let i = 8; i < data.length; i+=8) {
                if (i == 56) break;
                
                result.push({
                    code: data[i].split('#')[1],
                    number1: data[i+1].split('-')[0],
                    number2: data[i+1].split('-')[1],
                    number3: data[i+1].split('-')[2],
                });
            }

            return result;
        }

        getData(true);
        startCountdown();

        return {
            timeLeft: computed(() => {
                const minutes = Math.floor(timeLeft.value / 60);
                const seconds = timeLeft.value % 60;
                return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }),
            isModalOpen,
            modalSnipperRef, // Return modalSnipperRef to use it in the template
            modalSnipperRaceRef, // Return modalSnipperRaceRef to use it in the template
            RowScore,
            codCarrera,
            jackpot,
            bannerText,
            firstPlace,
            secondPlace,
            thirtPlace,
            boxList
        };
    },
    data() {
        return {
            primero: "primero",
            segundo: "segundo",
            MainTitleRange: 8,
            RowValue: 8,
            colors: ['bg-c1', 'bg-c2', 'bg-c5', 'bg-c7', 'bg-c8', 'bg-c3', 'bg-c4', 'bg-c6'],
            showBanner: true,
        }
    }
}
</script>

<style scoped>
    .segundo,
    .primero {
        background-color: #ffffff;
    }

    .content {
        background: #1f2224;
        box-shadow: 3px 6px 9px 2px #0b0b0b6b;
    }

    .carrera {
        width: 48%;
        background-color: #252d32;
    }

    .top-container {
        z-index: 2;
        width: 100%;
    }

    .top-right {
        margin: 0 0 30px auto;
    }

    .content-boxes {
        transition: all 1.5s;
        height: 100%;
        z-index: 2;
        width: 100%;
    }

    .content-boxes.hide {
        opacity: 0;
        transform: translate(-100%);
        height: 0;
        visibility: hidden;
    }


    .box {
        height: 100%;
        background-color: #1f2224;
        border-radius: 0.5rem;
        -webkit-box-shadow: 9px 13px 9px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 13px 9px -10px rgba(0,0,0,0.75);
        box-shadow: 9px 13px 9px -10px rgba(0,0,0,0.75);
    }

    .box-list .bg-c1,
    .box-list .bg-c4 {
        color: #fff
    }

    .box-list .bg-c2,
    .box-list .bg-c6 {
        color: #ff0000;
    }

    .box-list .bg-c3,
    .box-list .bg-c5,
    .box-list .bg-c8 {
        color: #000;
    }

    .box-list .bg-c7 {
        color: #ffff00;
    }

    .box-code {
        margin-right: 15px;
    }

    .left {
        margin-top: 23px;
        width: 22%;
    }

    .box-header {
        height: 60px;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(0deg, rgb(72 104 101) 42%, rgb(46 84 74) 80%);
        border-radius: 0.5rem;
        box-shadow: 0px 2px 1px #0000004f;
        margin-bottom: 15px;
        font-size: 1.8rem;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 1px 1px 3px #000000;
    }

    .box-content {
        padding: 10px;  
    }

    .h-list {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        border: 1px solid #a2a2a2;
        border-radius: 1rem;
        margin-bottom: 10px;
        font-size: 27px;
        color: rgb(255, 255, 255);
        background-image: linear-gradient(360deg, #000000, #223f38 50%, #00251d);
        box-shadow: 1px 1px 3px #000000;
    }

    .box-number {
        display: flex;
        column-gap: 5px;
    }
    .box-n {
        width: 45px;
        height: 40px;
        display: flex;
        justify-content: center;
        border: solid 1px #476b6b;
        color: #fff;
        text-shadow: 0px 1px 0 #000000;
        border-radius: 3px;
        box-shadow: 0 1px 0 1px rgb(31 48 48), inset 0px 15px 4px 0px rgb(255 255 255 / 33%);
    }
</style>
