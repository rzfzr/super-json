<template>
  <v-container>
    <div v-for="field in fields" :key="field.name">
      <v-textarea :label="field.name" counter no-resize :rows="field.rows" v-model="field.value"></v-textarea>
    </div>
    <v-row>
      <v-col>
        <h2 id="export" draggable="true" @dragstart="inject">Export</h2>
      </v-col>
      <v-col>
        <h2 id="import" @drop="dropJson" @dragenter.prevent @dragover.prevent>Import</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
/* eslint-disable */

declare const window: any;
const { ipcRenderer } = require("electron");
const fs = require("fs-extra");
window.ipcRenderer = ipcRenderer;
import Vue from "vue";
export default Vue.extend({
  name: "Editor",
  data: function () {
    return {
      fields: [
        { name: "title", rows: 2, value: "" },
        { name: "tags", rows: 4, value: "" },
        { name: "description", rows: 5, value: "" },
        {
          name: "playlist",
          type: "select",
          value: {},
          options: [
            {
              etag: "a2mxDaA2AVKZRxJGwN0yjPj4Z3Q",
              id: "PLfUALTmsML0W6-qltZq79QFhf4H2jFwIJ",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Feng Shui" },
            },
            {
              etag: "uxLYr0JMdfXrCFEx5CUIPfsoiHE",
              id: "PLfUALTmsML0VoIrw17YPoEqvglue5g_nK",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais com Jeans" },
            },
            {
              etag: "XrDg0lgjOi1xf1PMvUF6EZdCofw",
              id: "PLfUALTmsML0VjqiWsA9U0W5aqqgqZP6Nk",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Cobogó" },
            },
            {
              etag: "UCmgS8M7LDCTce2AFlNriaYOdxI",
              id: "PLfUALTmsML0VeihSeCGhcXZZ3Y5g43utz",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais de natal" },
            },
            {
              etag: "Uk_f98_lY4OpSwxvc5PvQAR97C4",
              id: "PLfUALTmsML0XCZ0WUQ3qa_jfeDhi9jelm",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais de natal" },
            },
            {
              etag: "Nl2HvqpUi1gCA4rn1w9iPjBwPxg",
              id: "PLfUALTmsML0W7ZReJKW3Q7XR91H-MdC9X",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais com Galhos Secos" },
            },
            {
              etag: "7NjtC2G7FatxZkTuDTtS6meKjrc",
              id: "PLfUALTmsML0XteSkJ8rea9Ealj-2nxpfh",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Galhos Secos" },
            },
            {
              etag: "votA6d4TgnvUGrAtfGuMfdM2rdw",
              id: "PLfUALTmsML0XMhpzx-Hff8AKkFyyMRmf4",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais de Decoração Retrô" },
            },
            {
              etag: "reaodJOzsXqPmm_BSY2WTQ5lnE0",
              id: "PLfUALTmsML0UbLBdR135XJK_UnQeImo3Z",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais para Home Office" },
            },
            {
              etag: "d9ROY6zF38BCXlQgJyF9mN_MAgo",
              id: "PLfUALTmsML0XNs35tSpz9gfw3iKzObvUG",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais de Pássaros" },
            },
            {
              etag: "M9UiwGJPab3Qi17_x2r6kuGnZuA",
              id: "PLfUALTmsML0X38H_zpUlEgmr5NCXIdXoU",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Carretel" },
            },
            {
              etag: "Ug6Rd4OPOKuauHWp7UYpMBVfjTI",
              id: "PLfUALTmsML0Vz3SnxgkACjq8nZ4bvp_V_",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais de Aparadores" },
            },
            {
              etag: "sg0fNhy1UAXDcr2urhtaMJ1fIXM",
              id: "PLfUALTmsML0U5lbxaave94Y5FBpsZcmeS",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Decoração Rústica" },
            },
            {
              etag: "FEf-n9y46VWSXSb1gwfZ_Bd3Ud8",
              id: "PLfUALTmsML0UGZN2IW8RsRr6DjycW_RGn",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Lavanderias" },
            },
            {
              etag: "z0S2RTBEfIp9TSqSdLLnXfuz1pY",
              id: "PLfUALTmsML0XmTQ0t3HcP1OTwCAF-YUBw",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Galhos Secos" },
            },
            {
              etag: "GdkUGcawOkA9bF0DhDri9HsFntw",
              id: "PLfUALTmsML0XOrS26IAs0SNudwNLtFFNQ",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Esculturas" },
            },
            {
              etag: "-JaqUS1RS8PZ9OTcbwhMY3rMNZg",
              id: "PLfUALTmsML0Wqiv5q8FLc2SYspOocmu1_",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com espelhos" },
            },
            {
              etag: "MpooHFcqcIO3V6mwPLUJ8bfvufI",
              id: "PLfUALTmsML0XMQqhp-7bWAp_468QgWWP5",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Maquina de Costura Antiga" },
            },
            {
              etag: "X42cvVXH1cDFuluckTyL-b3Y0u4",
              id: "PLfUALTmsML0V0UNbpNqzoRZHNd14jwGYf",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Maquina de Costura Antiga" },
            },
            {
              etag: "Khoyc-GwfibaznY56BpL2ouW4vg",
              id: "PLfUALTmsML0Uv4hsVbO97JmrT9aIFdJC1",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais com Luminárias e Lustres" },
            },
            {
              etag: "nx1YGYNHhMScLQX3695P00PRTKU",
              id: "PLfUALTmsML0XHfiLely6rx8-KmblJZDuP",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Adesivos" },
            },
            {
              etag: "fZScp548Ox5sJL6UCJNI0oKL8FY",
              id: "PLfUALTmsML0UBJQcB0P02q1dqZPZX1GHS",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Papel de Parede" },
            },
            {
              etag: "93TN7Dbqdt3PLVOXeTiRWG83EjI",
              id: "PLfUALTmsML0X2G52u5qjRAHFrG1SABwPT",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Canos de PVC" },
            },
            {
              etag: "qcXVyBIznU3gOxhby_w_rtx2WwY",
              id: "PLfUALTmsML0VUpuqwq6ZkF7xOPKBhOD9V",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Pássaros" },
            },
            {
              etag: "U6JFpRR0X0LmPzsGECm6twG_X9c",
              id: "PLfUALTmsML0UpVNZMrdV609taPCopc14X",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais de Decoração Tropical" },
            },
            {
              etag: "CtJXjSKdWQElUAOjUmaKm61k0Qg",
              id: "PLfUALTmsML0UqXUff-C_G3x6MxVGDDkX6",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com escritórios" },
            },
            {
              etag: "JoVIjCcp2TGZDZFBV58mAAHKKdI",
              id: "PLfUALTmsML0VfYOdUoB7dOarrmu4_-RT5",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Prateleiras" },
            },
            {
              etag: "ehIQPxOq4r7KqVYgr0MosYZmjDs",
              id: "PLfUALTmsML0Uqel2vq-jYKU0gwDuI4JJL",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Camas" },
            },
            {
              etag: "DuImnxo1M3A7Y3ykOAUMtmbnZSA",
              id: "PLfUALTmsML0VYYJ8My8_T7UNd4GI5sGhs",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Cadeiras Velhas" },
            },
            {
              etag: "eEMLIKmf9VrIVCRmFRTyf3Z6xYA",
              id: "PLfUALTmsML0WEFxt3UB6zQA39ZZNfQMjt",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Canos" },
            },
            {
              etag: "limdDKpbRycAiSpOvAVj4nLZ6j0",
              id: "PLfUALTmsML0V6cmfwwimOU-Y72_tRKYl2",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Troncos de Arvores" },
            },
            {
              etag: "f9SMLOndC4l8aztMkue9oOp2Qbw",
              id: "PLfUALTmsML0VQ2FqYHKSbNgqnYCEZ7Fi4",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais Estilo Retrô" },
            },
            {
              etag: "Mgxm97nXgyPvxEtab-juYYK8ZIk",
              id: "PLfUALTmsML0UC8a0dHWESJZCUCifzR8rA",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Tambores e Latões" },
            },
            {
              etag: "nXDJfhnnjYJvB62RdfLbmoRWGdg",
              id: "PLfUALTmsML0Wmc3WNRWUjlILglKqtJQ3c",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Relógios" },
            },
            {
              etag: "gDG3-trEhR9nqm33G00LujLL43c",
              id: "PLfUALTmsML0VbfogTo_l_D4GVRRgLKC-H",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Latas" },
            },
            {
              etag: "r2McMonopILp_DVjizrjURvMiig",
              id: "PLfUALTmsML0UyIOS4Pgt8xxJiFZ928qTw",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias com Gavetas" },
            },
            {
              etag: "uGmYT8_Eapm_CLkCKg6BvfW9pqU",
              id: "PLfUALTmsML0Vr9l2lkSextwcnGKy8e_i8",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais com SOFÁS" },
            },
            {
              etag: "9pKL_toYr1-5YPsvSVqx-wE5zLM",
              id: "PLfUALTmsML0V5W4wpO4oBLFujWC_bnEX9",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "ideias com malas" },
            },
            {
              etag: "s3SG5h_LjpSzt7SQukd6TTcm9kA",
              id: "PLfUALTmsML0Xbv25BtN-WKIj0aj-06ZCv",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Só Ideias com Bambu" },
            },
            {
              etag: "d7CxHyjEVYJSvZZ6sEcY2cJG354",
              id: "PLfUALTmsML0VYcdkpzk_WfUROQ3FWHoRP",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Só Ideias Legais Saudáveis e Naturais" },
            },
            {
              etag: "B7kxqRMkJUQppIIaZWwdAhfMczc",
              id: "PLfUALTmsML0XNutboBzGhX4yJC3JqnvOX",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Pedras" },
            },
            {
              etag: "RAJkN6xtqhgY66hBDEsBUV_jnGg",
              id: "PLfUALTmsML0X9emuiN4dVv9n25K-gXCab",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias para Casas e Apt. Pequenos" },
            },
            {
              etag: "DsmrUpoO53whYPgBRNlvm6PEqJk",
              id: "PLfUALTmsML0UAzpdO7IyH_xPThhynRyLT",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Varandas e Sacadas - Só Ideias Legais" },
            },
            {
              etag: "_RHH7D9Ll6JGK7kLeiw20BbyGBU",
              id: "PLfUALTmsML0XtNi6ODWvvCp23043rFTam",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Quartos Pequenos - Só Ideias Legais" },
            },
            {
              etag: "RNB-MebzbG5XdLO0lWSWWkhZdxs",
              id: "PLfUALTmsML0UeqERXz4kC9B6gIhBVAwju",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Cozinha Americana" },
            },
            {
              etag: "r3xTdnPWZ5Jg5dshjrpd5XUZFnw",
              id: "PLfUALTmsML0UQg7E19iqYEZccvFoYKiCa",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Animais de Estimação" },
            },
            {
              etag: "PJBCReQhLadiBKM-NAbBOB6_3Ec",
              id: "PLfUALTmsML0UbhIA3KVuqeXNz_JBhixJT",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais para o Natal / Christmas Ideas" },
            },
            {
              etag: "0kwjkZUmouV0wEl2B0LrtW6q_8g",
              id: "PLfUALTmsML0VrRUNzvULs3GixRr7moRZT",
              snippet: {
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title: "Ideias Legais para Banheiros // Bathroom Ideas",
              },
            },
            {
              etag: "JAkyaAS9gEIhh_XhU6zzr_G_Svw",
              id: "PLfUALTmsML0WjjBKpm68E-6PK6236kN-S",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais para Cozinhas / Kitchen Ideias" },
            },
            {
              etag: "JtjcpPfmGczAA9m7MJJ8l7DpKDA",
              id: "PLfUALTmsML0XiPwjb-HZT3tytrvDwd8qO",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "ideias legais com sapateiras" },
            },
            {
              etag: "8-FGTHvG1NroSY5UMlOsefwrW9s",
              id: "PLfUALTmsML0XuRwBeiWCbQy07H7bhLq7J",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias legais com Cimento" },
            },
            {
              etag: "1alknGhKkvh_8nbqF6MmguVEqPg",
              id: "PLfUALTmsML0XhPJfMPAH9UPLek58-ie92",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "Ideias Legais com Quadros ou Molduras" },
            },
            {
              etag: "ZmwuQi51Y7ZLT4ZDG0E8Zd0nYgw",
              id: "PLfUALTmsML0W5Ug8318gnki2ldzGiX1EK",
              snippet: {
                isFavorite: true,
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title: "Ideias Legais de Decoração / Cool Decoration Ideas",
              },
            },
            {
              etag: "bAnVd2yG3VnR3lgK8VgVBspd9Jo",
              id: "PLfUALTmsML0XPO8Z5BkxYB1XhXQ72IMU6",
              snippet: {
                isFavorite: true,
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title: "Ideias Legais de Reciclagem / Recycling and Upcycling Cool Ideas",
              },
            },
            {
              etag: "sX5YIArh-S0zyd74xG_xWPd64YI",
              id: "PLfUALTmsML0UiumWhcX5RecK3Xn0bdk5U",
              snippet: {
                isFavorite: true,
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title: "Ideias Legais de Organização / Cool Organization Ideas",
              },
            },
            {
              etag: "t1B34iSP4Sw5BtLzG-UlyG2Ira0",
              id: "PLfUALTmsML0XioZ2Ps--RnwrA-pXcnzg4",
              snippet: {
                isFavorite: true,
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title: "Ideias Legais para Jardim / Cool Gardening Ideas // Ideas Geniales para Jardín",
              },
            },
            {
              etag: "IJReJ9ekEJ678fxfMCYeZ2JyqEc",
              id: "PLfUALTmsML0Xeq011vZ3rwOsXQSrGdUT2",
              snippet: {
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title:
                  "Ideias Legais com Pallets e Caixotes // Crate and Pallet Wood Ideas / Ideas geniales con pallets y cajones",
              },
            },
            {
              etag: "FSjrX99zM3-64QvVnkBOOpFeoe8",
              id: "PLfUALTmsML0UwZwCWgF92vKH4SePf0pyr",
              snippet: { channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw", title: "DIY com Coco // Coconut DIY Projects" },
            },
            {
              etag: "xPyOKDu0hW6ugAzxIMBaEGBO07E",
              id: "PLfUALTmsML0Vk5wVPBqXe6vucr4grh_HU",
              snippet: {
                channelId: "UCc4Ngn8VDOuJtD5LGMN9Drw",
                title: "DIY com Pallets / Pallets DIY Projects / Proyectos de bricolaje de palets",
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    getCustomTime() {
      const date = new Date();
      return (
        date.getUTCFullYear().toString() +
        (date.getUTCMonth() + 1).toString() +
        date.getUTCDate().toString() +
        date.getUTCHours().toString() +
        date.getUTCMinutes().toString() +
        date.getUTCSeconds().toString()
      );
    },
    inject: async function (event: any) {
      event.preventDefault();
      if (!fs.existsSync(this.$dir)) {
        fs.mkdirSync(this.$dir);
      }
      let filePath = `${this.$dir}\super.json`;
      fs.writeFileSync(filePath, JSON.stringify(this.fields), "utf-8");
      fs.writeFileSync(`${this.$dir}\\${this.getCustomTime()}.json`, JSON.stringify(this.fields));
      window.ipcRenderer.send("ondragstart", filePath);
      console.log(filePath);
    },
    dropJson: function (evt: { dataTransfer: { files: any } }) {
      let file = evt.dataTransfer.files[0];
      let content = JSON.parse(fs.readFileSync(file.path));
      content.forEach((element: { name: string; value: string }) => {
        this.fields.forEach((field) => {
          if (field.name == element.name) {
            field.value = element.value;
          }
        });
      });
    },
  },
});
</script>