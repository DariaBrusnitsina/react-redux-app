import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    add: async () => {
        const date = Date.now()
        const { data } = await httpService.post(todosEndepoint, {
          title: `New task ${date}`,
          completed: false,
        });
        return { data };
      },
};
export default todosService;
