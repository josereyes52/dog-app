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
        // this is the data that will be used in the component as 8x8 matrix with the corresponding index
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
        }
    },
    methods: {
        getRowValue(index, value) {
            if (this.rowfetch[index]) {
                return this.rowScore[this.rowfetch[index][value]];
            }

            return 0;
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
        <div class="relative title w-1/9 max-w-1/9 h-16 border-r-2 flex justify-center font-mono items-center text-3xl text-white" >{{ n }}
            <div class="border-l-2 " :class="'bg-c'+ n"></div>
        </div>
            <div 
                class="title score w-1/9 max-w-1/9 h-16 border-r flex justify-center font-mono items-center text-[24px] text-white bg-[linear-gradient(360deg,_#000000,_#223f38_50%,_#00251d)]" 
                v-for="(i, index) in value" 
                :key="index"
            > 
                {{getRowValue(n-1, index)}}
            </div>
    </div>
</template>
