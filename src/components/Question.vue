<script lang="ts">
export default {
    props: {
        title:      { type: String },
        message:    { type: String },
        button:     { type: String },
        banner:     { type: String },
        onNext:     { type: Function }
    }
};
</script>

<template>
    <div class="background w-100 d-inline-block" align="left">
        <div class="window glass active" style="max-width: 100%">
            <div class="title-bar">
                <div class="title-bar-text">{{ title }}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>

            <div class="window-body has-space">
                <div align="center">
                    <img
                        :src="banner"
                        class="w-100 glitch text twitch-effect medium" />
                </div>

                <p>{{ message }}</p>
                <hr/>
                <div align="right">
                    <button :onclick="onNext">{{ button }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
