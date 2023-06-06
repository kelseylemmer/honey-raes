import { CustomerViews } from "./CustomerViews.js"
import { EmployeeViews } from "./EmployeeViews.js"


export const ApplicationViews = () => {

		const localHoneyUser = localStorage.getItem("honey_user")
    	const honeyUserObject = JSON.parse(localHoneyUser)

		if (honeyUserObject.staff) {
			//return employee views
			return <EmployeeViews />
		}
		else {
			//return customer views
			return <CustomerViews />
		}
	}