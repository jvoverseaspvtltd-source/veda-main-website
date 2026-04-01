import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Grid,
    TextField,
    MenuItem,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Alert,
    CircularProgress,
    alpha,
    useTheme,
    Card,
    CardActionArea,
    Divider,
    IconButton,
    Stack,
    Checkbox,
    Link as MuiLink,
    Chip
} from '@mui/material';
import {
    User,
    Briefcase,
    GraduationCap,
    Home,
    CreditCard,
    FileText,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Upload,
    Building2,
    Users,
    Info,
    Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE_URL = 'http://localhost:5000/api';

const steps = [
    'Loan Type',
    'Contact Details',
    'Success'
];

const loanTypes = [
    { id: 'Education Loan', title: 'Education Loan', icon: <GraduationCap size={32} />, description: 'Higher studies in India or abroad.', priority: true },
    { id: 'Personal Loan', title: 'Personal Loan', icon: <User size={32} />, description: 'Personal expenses & urgent needs.' },
    { id: 'Home Loan', title: 'Home Loan', icon: <Home size={32} />, description: 'Buy or construct your dream home.' },
    { id: 'Business Loan', title: 'Business Loan', icon: <Briefcase size={32} />, description: 'Expand or start your business.' }
];

const LoanApplication = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        course_type: 'Education Loan',
        name: '',
        phone: '',
        email: '',
        city: '',
        loan_amount: '',
        message: '',
        application_source: 'Direct Website'
    });

    const handleNext = () => {
        if (activeStep === 1) {
            handleSubmit();
        } else {
            setActiveStep((prev) => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const handleBack = () => setActiveStep((prev) => prev - 1);

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value) error = 'Full Name is required.';
                else if (!/^[A-Za-z\s]{2,50}$/.test(value)) error = 'Please enter a valid name (letters only).';
                break;
            case 'phone':
                if (!value) error = 'Mobile Number is required.';
                else if (!/^\d{10}$/.test(value)) error = 'Mobile number must be exactly 10 digits.';
                break;
            case 'email':
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address format.';
                break;
            case 'city':
                if (!value) error = 'City is required.';
                else if (!/^[A-Za-z\s]{2,50}$/.test(value)) error = 'Please enter a valid city name.';
                break;
            case 'loan_amount':
                if (!value) error = 'Loan amount is required.';
                else if (isNaN(value) || parseFloat(value) <= 0) error = 'Please enter a valid loan amount.';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Input restriction for numeric fields
        if (name === 'phone' || name === 'loan_amount') {
            if (value !== '' && !/^\d+$/.test(value)) return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Real-time validation
        const fieldError = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: fieldError
        }));
    };

    const handleSubmit = async () => {
        // Perform final validation
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setError('Please fix the errors in the form before submitting.');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(`${API_BASE_URL}/submissions/public/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Submission failed');
            
            setSubmitted(true);
            setActiveStep(2);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0: // Step 1: Loan Type
                return (
                    <Box sx={{ py: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textAlign: 'center' }}>
                            Select the type of loan you need
                        </Typography>
                        <Grid container spacing={3}>
                            {loanTypes.map((type) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={type.id}>
                                    <Card 
                                        sx={{ 
                                            position: 'relative',
                                            borderRadius: 5,
                                            border: '2px solid',
                                            borderColor: formData.course_type === type.id ? 'primary.main' : 'divider',
                                            transition: 'all 0.3s ease',
                                            overflow: 'visible',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        {type.priority && (
                                            <Chip 
                                                label="Most Popular" 
                                                color="secondary" 
                                                size="small" 
                                                sx={{ 
                                                    position: 'absolute', 
                                                    top: -12, 
                                                    right: 20, 
                                                    fontWeight: 900,
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                                }} 
                                            />
                                        )}
                                        <CardActionArea 
                                            onClick={() => setFormData({ ...formData, course_type: type.id })}
                                            sx={{ p: { xs: 2, md: 4 }, textAlign: 'center' }}
                                        >
                                            <Box sx={{ 
                                                mb: 2, 
                                                color: formData.course_type === type.id ? 'primary.main' : 'text.secondary',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                {type.icon}
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{type.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">{type.description}</Typography>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                );

            case 1: // Step 2: Basic Contact Info
                return (
                    <Box sx={{ py: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                            How should we contact you?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                            Our loan advisor will call you to discuss the details securely.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField 
                                    fullWidth 
                                    label="Full Name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField 
                                    fullWidth 
                                    label="Mobile Number" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    required 
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    InputProps={{ startAdornment: <Smartphone size={18} style={{ marginRight: 8, color: '#64748b' }} /> }} 
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField 
                                    fullWidth 
                                    label="Email Address" 
                                    name="email" 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField 
                                    fullWidth 
                                    label="City" 
                                    name="city" 
                                    value={formData.city} 
                                    onChange={handleChange} 
                                    required 
                                    error={!!errors.city}
                                    helperText={errors.city}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField 
                                    fullWidth 
                                    label="Approx Loan Amount (Required)" 
                                    name="loan_amount" 
                                    type="text" 
                                    value={formData.loan_amount} 
                                    onChange={handleChange} 
                                    error={!!errors.loan_amount}
                                    helperText={errors.loan_amount}
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField 
                                    fullWidth 
                                    label="Tell us more about your requirement (Optional)" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    multiline 
                                    rows={3} 
                                />
                            </Grid>
                            <Grid size={12}>
                                <Alert severity="info" icon={<Info size={20} />} sx={{ borderRadius: 4, bgcolor: alpha(theme.palette.info.main, 0.05) }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Privacy Protection</Typography>
                                    <Typography variant="caption">
                                        We do NOT ask for sensitive documents like DOB, Address, or PAN card here. Your privacy is our priority. A verified expert from Veda Loans will guide you through the secure documentation process during your consultation.
                                    </Typography>
                                </Alert>
                            </Grid>
                        </Grid>
                    </Box>
                );

            default:
                return null;
        }
    };

    if (submitted) {
        return (
            <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 }, textAlign: 'center', px: 3 }}>
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <Box sx={{ mb: 4, color: 'success.main', display: 'flex', justifyContent: 'center' }}><CheckCircle2 size={theme.breakpoints.down('sm') ? 60 : 80} /></Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>Enquiry Received!</Typography>
                    <Typography color="text.secondary" sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Bhai, thank you! Your enquiry has been received. 
                        Our team will call you on **{formData.phone}** within **2 business hours** to discuss further steps.
                    </Typography>
                    <Button variant="contained" href="/" fullWidth sx={{ px: 6, py: 1.5, borderRadius: 5, maxWidth: 300 }}>Back to Home</Button>
                </motion.div>
            </Container>
        );
    }

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
            <Container maxWidth="md">
                <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', px: 2 }}>
                    <Typography variant="h3" sx={{ 
                        fontWeight: 950, 
                        letterSpacing: '-2px', 
                        color: 'primary.main', 
                        mb: 1,
                        fontSize: { xs: '2.5rem', md: '3rem' }
                    }}>
                        Veda Loans
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Simple. Secure. Direct.
                    </Typography>
                </Box>

                <Stepper activeStep={activeStep} sx={{ mb: 6, display: { xs: 'none', md: 'flex' } }}>
                    {steps.slice(0, 2).map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                    <Step><StepLabel>Consultation</StepLabel></Step>
                </Stepper>

                <Paper sx={{ p: { xs: 2, sm: 4, md: 6 }, borderRadius: { xs: 6, md: 8 }, boxShadow: '0 40px 100px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderStepContent(activeStep)}
                        </motion.div>
                    </AnimatePresence>

                    {error && <Alert severity="error" sx={{ mt: 4, borderRadius: 3 }}>{error}</Alert>}

                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column-reverse', sm: 'row' },
                        justifyContent: 'space-between', 
                        mt: { xs: 4, md: 8 },
                        gap: 2
                    }}>
                        <Button
                            disabled={activeStep === 0 || loading}
                            onClick={handleBack}
                            fullWidth={activeStep !== 0}
                            startIcon={<ChevronLeft size={18} />}
                            sx={{ 
                                borderRadius: 4, 
                                px: 4, 
                                py: 1.5,
                                fontWeight: 700,
                                display: activeStep === 0 ? 'none' : 'flex'
                            }}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            disabled={loading}
                            fullWidth
                            endIcon={activeStep === 0 && <ChevronRight size={18} />}
                            sx={{ 
                                borderRadius: 4, 
                                px: { xs: 4, md: 6 }, 
                                py: 1.5, 
                                fontWeight: 800, 
                                boxShadow: '0 12px 32px rgba(26, 54, 93, 0.25)',
                                order: { xs: -1, sm: 0 }
                            }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : (activeStep === 1 ? 'Get Call Back' : 'Continue')}
                        </Button>
                    </Box>
                </Paper>
                
                <Box sx={{ mt: 6, textAlign: 'center', px: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', maxWidth: 400, mx: 'auto' }}>
                        <Info size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                        Secure enquiry system. No financial documents required at this stage.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

const Chip = ({ label, color, size, sx }) => (
    <Box sx={{ 
        bgcolor: color === 'secondary' ? 'secondary.main' : 'primary.main',
        color: 'white',
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        fontSize: '0.7rem',
        fontWeight: 900,
        ...sx
    }}>
        {label}
    </Box>
);

export default LoanApplication;
