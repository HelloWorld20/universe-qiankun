/** 全局store对象，方便任意地方拿到全局store对象 */
class GlobalStore {
    private store: any;

    constructor(store: any) {
        this.store = store;
    }

    public getStore() {
        return this.store;
    }
}


export default GlobalStore