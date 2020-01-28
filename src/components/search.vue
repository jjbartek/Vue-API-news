<template>
    <div>
        <div class="search-box">
            <input type="text" class="search-box__field" placeholder="Enter keywords..">
            <button class="search-box__button"><i class="fas fa-search"></i></button>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    .search-box {
        display: flex;
        align-content: center;
        margin-bottom: 30px;

        &__field {
            flex: 1;
            margin-right: 10px;
            background: #fff;
            padding: 20px;
            font-size: 17px;
        }

        &__button {
            width: 80px;
            background: $search-button-background;
            color: $search-color-background;
            outline: 0;
            border: 0;
            cursor: pointer;
            transition: 0.3s ease-in-out opacity;
        }

        &__button:hover {
            opacity: 0.7;
        }
    }
</style>