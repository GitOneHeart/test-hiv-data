<template>
  <div class="page-root">
    <section class="PI-page">
      <div class="report-title">
        <span> Drug resistance interpretation: {{ PI.gene.name }} </span>
        <span
          >{{ PI.algorithm.family }}{{ PI.algorithm.version }}({{
            PI.algorithm.publishDate
          }})</span
        >
      </div>
      <div v-if="PI.PimutationsByTypes && PI.PimutationsByTypes.length > 0">
        <ul class="mutation-type">
          <li>
            <span>PI Major Resistance Mutations:</span>
            <div style="margin-left: 35px">
              <span
                class="mutation-type-text"
                v-for="(item, index) in PI.PimutationsByTypes[0].mutations"
                :key="index"
                >{{ item.text }},</span
              >
            </div>
          </li>
          <li>
            <span>PI Accessory Resistance Mutations:</span>
            <div style="margin-left: 35px">
              <span
                class="mutation-type-text"
                v-for="(item, index) in PI.PimutationsByTypes[1].mutations"
                :key="index"
                >{{ item.text }},</span
              >
            </div>
          </li>
          <li>
            <span>Other Mutations:</span>
            <div style="margin-left: 35px">
              <span
                class="mutation-type-text"
                v-for="(item, index) in PI.PimutationsByTypes[2].mutations"
                :key="index"
                >{{ item.text }},</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div
        class="report-level-container"
        style=""
        v-if="PI.Pilevels.levels && PI.Pilevels.length > 0"
      >
        <div class="report-level-title">
          Protease Inhibitors
        </div>
        <ul class="report-level-ul" style="">
          <li
            class="report-level-li"
            style=""
            v-for="(item, index) in PI.Pilevels"
            :key="index"
          >
            <span style="font-weight: bold"
              >{{ item.drug.fullName }}({{ item.drug.displayAbbr }})</span
            ><span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
      <div
        class="comment-type-container"
        style=""
        v-if="PI.PicommentsByTypes && PI.PicommentsByTypes.length > 0"
      >
        <p>PR comments</p>
        <div v-for="(item, index) in PI.PicommentsByTypes" :key="index">
          <p class="comment-type-p">
            PI {{ item.commentType }}
          </p>
          <ul>
            <li v-for="(citem, cindex) in item.comments" :key="cindex">
              <span class="comment-type-highlightText">{{
                citem.highlightText
              }}</span
              ><span class="comment-type-text">{{ citem.text }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="report-title">
        <span> Mutation scoring: {{ PI.gene.name }} </span>
        <span
          >{{ PI.algorithm.family }}{{ PI.algorithm.version }}({{
            PI.algorithm.publishDate
          }})</span
        >
      </div>
      <div class="report-table">
        <div class="report-table-c" style="">
          <el-table :data="PiTableGather.PiTableData" style="width: 100%">
            <el-table-column
              v-for="(item, index) in PiTableGather.tableHeader"
              :key="index"
              :label="item.label"
            >
              <template v-slot="scope">{{ scope.row[item.prop] }}</template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '@/mock/data2.js'
import { parseHeader } from '@/utils/parseHeader'
export default {
  data() {
    return {
      baseData: data.data,
      currentVersion: {}, // 当前版本
      currentProgramVersion: {}, // 当前程序版本
      mutationsAnalysis: {},
      AllDrugResistance: [], // all 抗药性
      // PI 总集合
      PI: {
        algorithm: {},
        gene: {},
        Pilevels: [],
        PimutationsByTypes: [], // Pi突变类型
        PicommentsByTypes: [], // Pi注解类型
        PiDrugScoresArr: [], // Pi药物分数
      },
      // pi表格数据集合
      PiTableGather: {
        PiTableData: [],
        tableHeader: [],
      },
    }
  },
  methods: {
    getReportInfo() {
      this.currentProgramVersion = this.baseData.currentVersion // 当前程序版本
      this.mutationsAnalysis = this.baseData.mutationsAnalysis // all 抗药性
      this.AllDrugResistance = this.mutationsAnalysis.drugResistance // all

      // PI
      this.PI.algorithm = this.AllDrugResistance[0].algorithm // 运算规则
      this.PI.gene = this.AllDrugResistance[0].gene // 基因
      this.PI.Pilevels = this.AllDrugResistance[0].levels // pi等级
      this.PI.PimutationsByTypes = this.AllDrugResistance[0].mutationsByTypes // pi突变类型
      this.PI.PicommentsByTypes = this.AllDrugResistance[0].commentsByTypes // pi注解类型
      this.PI.PiDrugScoresArr = this.AllDrugResistance[0].drugScores // PI分数
    },
    getPiScore() {
      if (this.PI.PiDrugScoresArr && this.PI.PiDrugScoresArr.length > 0) {
        const map = new Map()
        this.PiTableGather.tableHeader = [{ label: 'pi', prop: 'rule' }]
        for (const { drug, partialScores } of this.PI.PiDrugScoresArr) {
          console.log(drug, '------drug')
          // console.log(drug.displayAbbr, "-----drug.displayAbbr");
          // console.log(drug.name, "-----drug.name");
          const obj = parseHeader('label\r\nprop')
          obj.label = drug.displayAbbr
          obj.prop = drug.name
          // console.log(obj)
          this.PiTableGather.tableHeader.push(obj)
          // console.log(drug.name, "---drug.drug.name");
          for (const mutScore of partialScores) {
            // console.log(typeof row, "=====row");
            const rule = mutScore.mutations.map(({ text }) => text).join(' + ')
            if (!map.has(rule)) {
              // set default values
              map.set(
                rule,
                this.PI.PiDrugScoresArr.reduce(
                  (row, drugScore2) => {
                    row[drugScore2.drug.name] = 0
                    return row
                  },
                  { rule }
                )
              )
            }
            const row = map.get(rule)

            // let object = {};

            row[drug.name] = mutScore.score
            // console.log(row, "----row");
            this.PiTableGather.PiTableData.push(row)
            // console.log(this.PiTableData.length, "---this.PiTableData");
            // console.log(this.PiTableData[0]);
            this.PiTableGather.PiTableData = this.PiTableGather.PiTableData.filter(
              (item, index, self) => {
                return self.indexOf(item) === index
              }
            )
          }
        }
        const totalRow = { rule: 'Total' }
        for (const {
          drug: { name },
          score,
        } of this.PI.PiDrugScoresArr) {
          totalRow[name] = score
        }
        // let drug = item.drug; // 药 名/缩写
        // let totalScore = item.score; // 总分
        // let partialScores = item.partialScores; // 局部分数
      }
    },
  },
  mounted() {
    this.getReportInfo()
    this.getPiScore()
    // let id = this.$route.params.dictId;
    // console.log('请求的参数为-----', id);
    // getDetails(id).then(resp => {
    //   console.log('获取到的数据为-----', resp);
    //   if (resp.code === 200) {
    //     this.baseData = resp.graphqlData;
    //   }
    // });
  },
}
</script>

<style scoped>
ul {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 20px;
}

.page-root {
  width: 1134px;
  padding: 0 21px;
  margin-left: calc(50% - 567px);
  color: #1c1b1c;
}

.report-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  padding: 8px 15px;
  font-weight: normal;
  border: 1px solid #cba800;
  background: #f1f0e9;
}

.mutation-type {
  padding: 5px 15px;
}
.mutation-type-text {
  margin-left: 5px;
  font-weight: bold;
}
.mutation-type li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 22px;
}

.mutation-type li span {
  font-size: 12px;
}
.report-level-container {
  width:500px;text-align: center
}
.report-level-title {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #969696;
  font-size: 13px;
  font-weight: bold;
}
.report-level-ul {
  list-style: none;width: 100%;padding: 8px 0
}
.report-level-li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 23px;
  font-size: 12px;
}
.comment-type-container {
  border: 1px solid #969696;
  background: #e3e3e3;
  padding: 0 15px;
}
.comment-type-p {
   font-size: 12px;font-weight: bold;
}
.comment-type-highlightText {
font-weight: bold;font-size: 12px
}
.comment-type-text {
  font-size: 12px
}
.comment-type > p {
  font-size: 12px;
  font-weight: bold;
}
.report-table {
margin-top: 15px
}
.report-table-c {
  display: flex;flex-direction: row
}
</style>
