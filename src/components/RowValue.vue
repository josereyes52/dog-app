<script>
export default {
    name: 'RowValue',
    props: {
        value: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        rowScore: {
            type: Array,
            required: true
        },
        colors: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            rowfetch: [
                [0,6,7,8,9,10,36,37],
                [60,1,11,12,13,14,38,39],
                [15,16,2,17,18,19,40,41],
                [20,21,22,3,23,24,42,43],
                [50,51,52,53,4,54,44,45],
                [55,56,57,58,59,5,46,37],
                [48,49,50,51,52,53,34,0],
                [54,55,56,57,58,59,60,35]
            ],
            rowClass: `row-${this.index} w-full flex`,
            bigValue: [],
            smallValue: [],
            pBigValue: [],
            pSmallValue: []
        }
    },
    methods: {
        handleRowScoreChange() {
            this.bigValue = [];
            this.smallValue = [];
            this.pBigValue = [];
            this.pSmallValue = [];
        },
        getRowValue(index, value) {
            if (this.rowScore[this.rowfetch[index][value]]) {
                if (this.bigValue.length === 0 ) {
                    this.bigValue.push(value);
                    this.pSmallValue = [];
                    this.pBigValue = [];
                    this.bigValue.push(parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2));
                }

                if (this.smallValue.length === 0 ) {
                    this.smallValue.push(value);
                    this.smallValue.push(parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2));
                }

                if (index === value) {
                    if (this.bigValue[1] < parseFloat(this.rowScore[this.rowfetch[index][value]])) {
                        this.bigValue[0] = value + 1;
                        this.bigValue[1] = parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2);
                    } else if (this.smallValue[1] > parseFloat(this.rowScore[this.rowfetch[index][value]])) {
                        this.smallValue[0] = value + 1;
                        this.smallValue[1] = parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2);
                    }
                } else {
                    if (this.pBigValue.length === 0) {
                        this.pBigValue.push(value);
                        this.pBigValue.push(parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2));
                    }

                    if (this.pSmallValue.length === 0) {
                        this.pSmallValue.push(value);
                        this.pSmallValue.push(parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2));
                    }

                    if (this.pBigValue[1] < parseFloat(this.rowScore[this.rowfetch[index][value]])) {
                        this.pBigValue[0] = `${(((index+1) * 8) - 8) + value}`;
                        this.pBigValue[1] = parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2);
                    } 

                    if (this.pSmallValue[1] > parseFloat(this.rowScore[this.rowfetch[index][value]])) {
                        this.pSmallValue[0] = `${(((index+1) * 8) - 8) + value}`;
                        this.pSmallValue[1] = parseFloat(this.rowScore[this.rowfetch[index][value]]).toFixed(2);
                    }
                }
            }

            if (value === 7 && index === 7) {
                const allRow = document.querySelectorAll('.score');
                // find into allRow if any dom element has the class bigScore or smallScore
                // if it has, remove it
                allRow.forEach((row) => {
                    if (row.classList.contains('bigScore')) {
                        row.classList.remove('bigScore');
                    }

                    if (row.classList.contains('smallScore')) {
                        row.classList.remove('smallScore');
                    }
                });

                const bPosition = 
                    (this.bigValue[0] * 9) - 9 > 0 ?
                    (this.bigValue[0] * 9) - 9 : 0;
                const sPosition =
                    (this.smallValue[0] * 9) - 9 > 0 ?
                    (this.smallValue[0] * 9) - 9 : 0;

                allRow[sPosition]?.classList.add('smallScore');
                allRow[bPosition]?.classList.add('bigScore');
                allRow[this.pBigValue[0]]?.classList.add('bigScore');
                allRow[this.pSmallValue[0]]?.classList.add('smallScore');
            }

            if (this.rowfetch[index]) {
                return this.rowScore[this.rowfetch[index][value]];
            }

            return 0;
        }
    },
    watch: {
        rowScore: {
            handler: 'handleRowScoreChange',
            deep: true // Detecta cambios profundos en el array
        }
    }
}
</script>

<style scoped>
    .title {
        box-shadow: 0px 2px 0 1px rgb(31 48 48), inset 0px 20px 6px 0px rgb(255 255 255 / 16%)
    }
    .title:nth-child(n+2) {
        border-bottom: 1px solid #fff;
    }

    .bigScore {
        color: #3bff49;
    }

    .smallScore {
        color: blue;
    }

    .title:nth-child(n+2):hover {
        background: #548179;
    }


    .title:nth-child(1) > div {
        width: 10px;
        height: 88%;
        position: absolute;
        right: 0;
        border-color: rgb(93, 93, 93);
        background-position: 42% 100%;
        border-width: 1px;
        border-radius: 2px;
    }
</style>

<template>
    <div :class="rowClass" v-for="n in value" :key="n">
        <div class="relative title w-1/9 max-w-1/9 h-16 border-r-2 flex justify-center font-mono items-center text-[27px] text-white" >{{ n }}
            <div class="border-l-2 " :class="'bg-c'+ n"></div>
        </div>
            <div 
                class="title score w-1/9 max-w-1/9 h-16 border-r flex justify-center font-mono items-center text-[27px] text-white bg-[linear-gradient(360deg,_#000000,_#223f38_50%,_#00251d)]" 
                v-for="(i, index) in value" 
                :key="index"
            > 
                {{getRowValue(n-1, index)}}
            </div>
    </div>
</template>
