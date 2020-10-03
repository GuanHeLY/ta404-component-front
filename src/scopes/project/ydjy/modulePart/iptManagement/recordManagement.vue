<template>
    <div style="height: 833px">
        <ta-border-layout :layout="{header:'205px',footer:'70px'}">
            <div slot="header">
                <ta-card title="查询条件" :bordered="false">
                    <ta-form
                            :autoFormCreate="(form) => {this.form = form}"
                            :formLayout="true">
                        <ta-form-item
                                fieldDecoratorId="insuplcAdmdvs"
                                label="参保地"
                                :span="8"
                                :labelCol="{span:8}"
                                :wrapperCol="{span:16}">
                            <ta-input></ta-input>
                        </ta-form-item>
                        <ta-form-item
                                fieldDecoratorId="mdtrtreaAdmdvs"
                                label="就医地"
                                :span="8"
                                :labelCol="{span:8}"
                                :wrapperCol="{span:16}">
                            <ta-input></ta-input>
                        </ta-form-item>
                        <ta-form-item
                                fieldDecoratorId="psnNo"
                                label="人员编号"
                                :span="8"
                                :labelCol="{span:8}"
                                :wrapperCol="{span:16}">
                            <ta-input></ta-input>
                        </ta-form-item>
                        <ta-form-item
                                fieldDecoratorId="certno"
                                label="证件号码"
                                :span="8"
                                :labelCol="{span:8}"
                                :wrapperCol="{span:16}">
                            <ta-input></ta-input>
                        </ta-form-item>
                        <ta-form-item
                                fieldDecoratorId="valiFlag"
                                label="有效标志"
                                :span="8"
                                :labelCol="{span:8}"
                                :wrapperCol="{span:16}">
                            <ta-input></ta-input>
                        </ta-form-item>
                        <div style="float: right">
                            <ta-button @click="fnReset">重置</ta-button>
                            <ta-button type="primary" @click="fnQuery">查询</ta-button>
                        </div>
                    </ta-form>
                </ta-card>
            </div>
            <div class="fit">
                <ta-card title="备案信息" :bordered="false" class="fit">
                    <div slot="extra">
                        <ta-button type="primary">新增</ta-button>
                        <ta-button>导入</ta-button>
                        <ta-button>导出</ta-button>
                    </div>
                    <ta-table
                            :columns="recordColumns"
                            :dataSource="recordData"
                            :haveSn="true"
                            size="small"
                            :bordered="true"
                            :scroll="{x:true,y:'100%'}">
                        <span slot="operate" slot-scope="text,record">
                            <ta-table-operate :operate-menu="operateMenu"></ta-table-operate>
                        </span>
                    </ta-table>
                </ta-card>
            </div>
            <div slot="footer">
                <ta-pagination
                        style="text-align: right;width: 100%"
                        defaultPageSize="10"
                        :pageSizeOptions="['10','50','100','200']"
                        :dataSource.sync="recordData"
                        :params="recordPageParams"
                        ref="recordPager"/>
            </div>
        </ta-border-layout>
    </div>
</template>

<script>
const recordColumns = [
  {
    title: '姓名',
    dataIndex: 'psnName',
    align: 'center',
    width: 120,
  },
  {
    title: '参保地',
    dataIndex: 'insuplcAdmdvs',
    align: 'center',
    width: 150,
  },
  {
    title: '就医地',
    dataIndex: 'mdtrtreaAdmdvs',
    align: 'center',
    width: 150,
  },
  {
    title: '证件类型',
    dataIndex: 'certType',
    align: 'center',
    width: 160,
  },
  {
    title: '证件号码',
    dataIndex: 'certno',
    align: 'center',
    width: 200,
  },
  {
    title: '人员编号',
    dataIndex: 'psnNo',
    align: 'center',
    width: 200,
  },
  {
    title: '性别',
    dataIndex: 'gend',
    align: 'center',
    width: 80,
  },
  {
    title: '参保人员类别',
    dataIndex: 'psnType',
    align: 'center',
    width: 180,
  },
  {
    title: '险种',
    dataIndex: 'insutype',
    align: 'center',
    width: 160,
  },
  {
    title: '异地备案类型',
    dataIndex: 'outFilType',
    align: 'center',
    width: 140,
  },
  {
    title: '开始日期',
    dataIndex: 'begndate',
    align: 'center',
    width: 120,
  },
  {
    title: '结束日期',
    dataIndex: 'enddate',
    align: 'center',
    width: 120,
  },
  {
    title: '有效标志',
    dataIndex: 'valiFlag',
    align: 'center',
    width: 100,
  },
  {
    title: '备案编号',
    dataIndex: 'filNo',
    align: 'center',
    width: 200,
  },
  {
    title: '操作',
    dataIndex: 'operate',
    align: 'center',
    scopedSlots: { customRender: 'operate', },
    fixed: 'right',
    width: 100,
  }
]
export default {
  name: 'recordManagement',
  components: {},
  data () {
    return {
      recordColumns,
      recordData: [
        {
          psnName: '张三',
          insuplcAdmdvs: '天津市',
          mdtrtreaAdmdvs: '北京市',
          certType: '身份证',
          certno: '220625199811250369',
          psnNo: '5555555',
          gend: '男',
          psnType: '在职',
          insutype: '城镇职工医疗保险',
          outFilType: '异地安置',
          begndate: '2020-09-03',
          enddate: '2020-10-04',
          valiFlag: '有效',
          filNo: '51565111',
        }
      ],
      operateMenu: [
        {
          name: '编辑',
          onClick: (record) => {
            this.$message.success('111')
          },
        }
      ],
    }
  },
  methods: {
    fnReset () {
      this.$bus.$emit('refresh')
    },
    recordPageParams () {
      const data = this.form.getFieldsValue()
      return data
    },
    fnQuery () {
      this.$refs.recordPager.loadData((data) => {

      })
    },
  },
}
</script>

<style scoped type="text/less">

</style>
