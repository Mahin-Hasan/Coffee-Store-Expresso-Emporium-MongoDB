import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        // *1
        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT', //*4
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-3xl font-extrabold capitalize">Update a coffee: {name}</h1>
        <form onSubmit={handleUpdateCoffee}>
            {/* form name and quantity*/}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Available Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* supplier taste */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Supplier Name" name="supplier" defaultValue={supplier} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Taste" name="taste" defaultValue={taste} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* category and details */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Details" name="details" defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Photo url */}
            <div className="mb-8">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input className="btn btn-neutral w-full" type="submit" value="Update Coffee" />
        </form>

    </div>
    );
};

export default UpdateCoffee;