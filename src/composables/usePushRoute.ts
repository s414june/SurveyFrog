import { useRouter } from "vue-router";
import { useStore } from "vuex";
export function usePushRoute() {
  const router = useRouter();
  const store = useStore();
  function pushRoute(num: number) {
    let currentRoute = router.currentRoute.value;
    let routeName: string = currentRoute.name?.toString() || "";
    let id = getPageId();
    let newRouteId = countPage(id, num);
    if (newRouteId < 0) return;
    let newRoutePath = getRoute(routeName, newRouteId);
    router.push(newRoutePath);
  }
  function getRoute(routeName: string, id: number) {
    let newRoutePath = "";
    let survey_length = store.state.survey_length;
    if (routeName === "start" && id > 0) {
      newRoutePath = "/survey/" + id;
      return newRoutePath;
    }
    switch (id) {
      case 0:
        newRoutePath = "/start";
        break;
      case survey_length + 1:
        newRoutePath = "/end";
        break;
      default:
        newRoutePath = "/survey/" + id;
        break;
    }
    return newRoutePath;
  }
  function getPageId() {
    let currentRoute = router.currentRoute.value;
    let id = 0;
    let survey_length = store.state.survey_length;
    switch (currentRoute.name) {
      case "start":
        id = 0;
        break;
      case "survey":
        id = parseInt(currentRoute.params.id.toString());
        break;
      case "end":
        id = survey_length + 1;
        break;
      default:
        id = 0;
        break;
    }
    return id;
  }
  function checkVerify(){
    
  }
  function countPage(id: number, num: number) {
    let newPage = id + num;
    return newPage;
  }
  return {
    pushRoute,
    getPageId,
  };
}
