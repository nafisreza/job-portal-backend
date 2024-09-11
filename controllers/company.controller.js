import Company from "../models/company.model";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).send("Company name is required");
    }

    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).send("Company already exists");
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company created successfully",
      company,
      status: true,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const company = await Company.find({ userId });

    if (!company) {
      return res.status(404).send("Company not found");
    }

    return res.status(200).json({
      company,
      status: true,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).send("Company not found");
    }

    return res.status(200).json({
      company,
      status: true,
    });

  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateCompany = async (req, res) => {
    try{
        const {name, logo, website, description, location} = req.body;
        const file = req.file;

        const updatedData = {
            name,
            website,
            description,
            location,
        };

        const company = await Company.findByIdAndUpdate(req.params.id, updatedData, {new: true});

        if(!company){
            return res.status(404).send("Company not found");
        }

        return res.status(200).json({
            message: "Company updated successfully",
            company,
            status: true,
        });

    } catch(error){
        res.status(400).send(error);
    }
};
