<template>
    <div style="height: 100%">
        <div id="echart" style="width: 400px; height: 300px">
            <!--            <div id="echart1" style="width: 100%">-->
            <!--                <div id="Acc" style="width:100%;height: 300px"></div>-->
            <!--            </div>-->
            <!--            <div id="echart2">-->
            <!--                <div id="main2" style="float:left;width:100%;height: 300px"></div>-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script>
    let echarts = require('echarts')
    // 引入饼状图组件
    require('echarts/lib/chart/pie')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')

    export default {
        name: "Echarts",
        data: () => ({
            myChart: null,
            advertising: 0, //广告
            fear: 0,
            gun_fear: 0,
            human: 0,
            normal: 0,
            political: 0,
            rumor: 0,
            sex: 0,
            reactionary: "",
            RateData: [],
            TypeData: []
        }),
        created() {
            this.$forceUpdate()

        },
        mounted: function () {
            this.initData()
        },
        methods: {
            //初始化数据
            initData() {

                this.myChart = echarts.init(document.getElementById('echart'))
                // 绘制图表
                this.myChart.setOption({
                    title: {
                        text: '识别结果',//主标题
                        x: 'center',//x轴方向对齐方式
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        id: 'charts',
                        left: '1%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: this.TypeData
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 'bottom',
                    },
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            data: this.RateData
                        }
                    ]
                });
            },
        },
        computed: {
            RumorMonitor() {
                return this.$store.state.isApplication.Rumor
            }

        },
        watch: {
            RumorMonitor() {
                if (this.$store.state.isApplication.Rumor === true) {
                    let data = this.$store.state.Acc
                    this.rumor = data.rumor
                    this.TypeData = ['谣言', '非谣言']
                    this.RateData = [this.rumor * 100, (1 - this.rumor) * 100]
                    this.initData()
                    this.$forceUpdate()
                    this.$store.state.isApplication.Rumor = false
                }
            }
        },
    }
</script>

<style scoped>

</style>