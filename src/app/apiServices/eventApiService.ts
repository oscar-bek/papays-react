import axios from "axios";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Event } from "../../types/event";

class EventApiService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getEvents() {
    try {
      const result = await axios.get(this.path + "/events", {
        withCredentials: true,
      });

      console.log("GETEVENTS:::", result.data.state);
      
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      const events: Event[] = result.data.data;
      return events;
    } catch (err: any) {
      console.log(`ERROR: getEvents: ${err.message}`);
      throw err;
    }
  }
}

export default EventApiService;