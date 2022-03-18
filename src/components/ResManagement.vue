<template>
    <!-- to include navbar -->
    <h1 id="titleOfPage">Resident Management</h1>
    <h3 id="appt">Appointments #</h3>
    <h3 id="res">Residents #</h3>
    <div class="search" style="text-align:right;">
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <button>Search</button>

    </div>

    <div class="table">
        <table class="table table-striped table-sm">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Blood Pressure</th>
            <th scope="col">Heart Rate</th>
            <th scope="col">Floor-Room Bed</th>
            <th scope="col">Conditions</th>
            <th scope="col">Admitted</th>
            <th scope="col">Updated At</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        </table>
    </div>

</template>

<script>
export default {

}
</script>

<style>
    #titleOfPage, #appt, #res{
        display: inline-block;
        text-align:Left;
        border-radius: 2px;
    }

    .table {
        border-collapse:collapse;
        width: 100%;
        border:solid rgb(54, 93, 138);
    }

    th, td {
    border: 1px solid #dddddd;
    padding: 15px;
}

    tr:nth-child(even){
        background-color: rgb(198, 229, 238);
    }

</style>