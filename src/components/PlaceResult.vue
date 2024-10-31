<script>
export default {
    name: 'PlaceResult',
    props: {
        place: {
            type: Object,
            required: false
        },
        firstPlace: {
            type: Object,
            required: true
        },
        secondPlace: {
            type: Object,
            required: true
        },
        thirtPlace: {
            type: Object,
            required: true
        }

    }

}
</script>

<template>
    <div class="place-result">
        <div class="place-result__firt-place place_item hide">
            <div class="place-result__image">
                <img :src="'/' + firstPlace.dog + '.png'" >
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-yellow-500 bg-yellow-500 text-white ordinal ...">1st</span>
                <p class="place-result__description">
                    ${{ firstPlace.money }}
                </p>
            </div>
        </div>
        <div class="place-result__second-place place_item hide">
            <div class="place-result__image">
                <img :src="'/' + firstPlace.dog + '.png'" >
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-yellow-500 bg-yellow-500 text-white ordinal ...">1st</span>
                <p class="place-result__description">
                    ${{ firstPlace.money }}
                </p>
            </div>
            
            <div class="place-result__image">
                <img :src="'/' + secondPlace.dog + '.png'" >
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-gray-500 bg-gray-500 text-white ordinal ...">2nd</span>
                <p class="place-result__description">
                    ${{ secondPlace.money }}
                </p>
            </div>
        </div>
        <div class="place-result__third-place place_item hide">
            <div class="place-result__image">
                <img :src="'/' + firstPlace.dog + '.png'" >
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-yellow-500 bg-yellow-500 text-white ordinal ...">1st</span>
                <p class="place-result__description">
                    ${{ firstPlace.money }}
                </p>
            </div>
            <div class="place-result__image">
                <img :src="'/' + secondPlace.dog + '.png'">
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-gray-500 bg-gray-500 text-white ordinal ...">2nd</span>
                <p class="place-result__description">
                    ${{ secondPlace.money }}
                </p>
            </div>
            
            <div class="place-result__image">
                <img :src="'/' + thirtPlace.dog + '.png'" >
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-gray-800 bg-gray-800 text-white dark:border-neutral-200 dark:text-white ordinal ...">3rd</span>
                <p class="place-result__description">
                    ${{ thirtPlace.money }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .place-result {
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: 0;
        left: 50%;
        width: 100%;
        height: 100%;
        max-width: 1200px;
        transform: translate(-50%, 0);
    }

    .place-result__image {
        position: relative;
        width: 100%;
        height: 250px;
        max-width: 400px;
    }

    .place-result__image img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .place-result__firt-place {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .place-result__number {
        width: 40px;
        height: 40px;
        position: absolute;
        border-radius: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 55%;
        transform: translateX(-50%);
        top: 37px;
        font-size: 33px;
        text-shadow: 1px 1px 4px #adadad;
    }

    .place-result__description {
        position: absolute;
        right: 0;
        background: #bebebe96;
        width: 100%;
        max-width: 167px;
        top: 60px;
        z-index: -1;
        height: 115px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        align-items: center;
        color: white;
        font-size: 24px;
        border-radius: 6px;
        box-shadow: 3px 5px 7px 0px #0000009c;
        padding-right: 10px;
        text-shadow: 2px 2px 2px #000000;
    }

    .place_item {
        transition: all 1.5s;
    }

    .place_item.hide {
        opacity: 0;
        transform: translate(-100%);
        height: 0;
        visibility: hidden;
    }

    .place-result__second-place {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .place-result__third-place {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>


