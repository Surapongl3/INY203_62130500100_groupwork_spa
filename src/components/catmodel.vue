<template>
    <div>
        <input v-model="inputValue" type="text" />

        <img
            @click="clicked"
            :src="cat.catImg"
            :alt="cat.id"
            class="image h-full w-full hover:opacity-90"
        />
    </div>
</template>
<script>
export default {
    props: ["cat"]


    , methods: {
        clicked() {
            this.$emit("delete", this.cat.id);
        }
    },
    data() {
        return {
            inputValue: this.cat.catName
        }
    },
    watch: {
        inputValue() {
            this.$emit("update", { ...this.cat, value: this.inputValue })
        }
    }
}
</script>
<style lang="">
    
</style>