import Item from "./Item";

class NetworkService {
	private itemService = new Item();

	public item() {
		return this.itemService;
	}
}

export default new NetworkService();
