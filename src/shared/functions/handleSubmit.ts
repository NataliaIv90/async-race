export const handleSubmit = (formData: FormData) => {
    const formDataObject: { [key: string]: string } = {};

    for (const entry of formData.entries()) {
        formDataObject[entry[0]] = entry[1] as string;
    }

    console.log(formDataObject);
};
